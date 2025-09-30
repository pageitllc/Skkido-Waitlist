import { defineEventHandler, readBody, createError } from "h3";

export default defineEventHandler(async (event) => {
  const { brevoApiKey, brevoListId } = useRuntimeConfig();

  const { name, email, company, role } = await readBody<any>(event);

  if (!name || !email) {
    throw createError({ statusCode: 400, statusMessage: "Name and email are required" });
  }
  if (!brevoApiKey) {
    throw createError({ statusCode: 500, statusMessage: "Brevo API key missing" });
  }

  const parts = name.trim().split(/\s+/);
  const firstName = parts[0];
  const lastName = parts.length > 1 ? parts.slice(1).join(" ") : "";

  const body = {
    email,
    attributes: {
      FIRSTNAME: firstName,
      LASTNAME: lastName,
      COMPANY: company || "",
      JOB_TITLE: role || "",
    },
    listIds: brevoListId ? [Number(brevoListId)] : [],
    updateEnabled: true,
  };

  try {
    const res = await $fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": brevoApiKey as string,
        accept: "application/json",
        "content-type": "application/json",
      },
      body,
    });
    return { ok: true, res };
  } catch (err: any) {
    const status = err?.status || 500;
    const message = err?.data?.message || "Failed to subscribe";
    throw createError({ statusCode: status, statusMessage: message });
  }
});
