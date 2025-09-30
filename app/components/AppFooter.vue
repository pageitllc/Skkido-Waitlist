<template>
  <div class="sk-container footer">
   <div class="flex flex--space ">
   <span>© {{ new Date().getFullYear() }} Skkido. All rights reserved.</span>

    <div class="flex">
        <a href="https://www.instagram.com/skkidohq/" target="_blank" rel="noopener noreferrer" class="sk-link sk-link--icon">
            <img src="~/assets/images/instagram-icon.svg" alt="Instagram" />
        </a>
        <a href="https://www.x.com/skkidohq" target="_blank" rel="noopener noreferrer" class="sk-link sk-link--icon">
            <img src="~/assets/images/x-icon.svg" alt="X" />
        </a>
        <a href="https://www.linkedin.com/company/skkidohq" target="_blank" rel="noopener noreferrer" class="sk-link sk-link--icon">
            <img src="~/assets/images/linkedin-icon.svg" alt="LinkedIn" />
        </a>
    </div>
   </div>
  </div>
</template>

<script setup>
const year = new Date().getFullYear()
</script>


<style>
.footer{

    padding: var(--sk-space-4);
    
}
</style>