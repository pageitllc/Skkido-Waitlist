<template>
    <section class="sk-container py-5">
        <div class="sk-hero-section">
            <div class="sk-hero-section__col-1">
                <span class="pill">Coming Soon 🤩</span>
                <h1>Work smarter. <br> Get paid securely.</h1>
                <p>Skkido is the all-in-one workspace for independent professionals and small businesses to manage
                    projects, clients, contracts, invoices, and payement in one place.</p>


                <div class="creators">
                    <div class="creators__avatars">
                        <img v-for="(avatar, i) in avatars" :key="i" :src="avatar" alt="Creator avatar"
                            class="creators__avatar" />
                    </div>
                    <span class="creators__text">27+ professionals have secured their spot!</span>
                </div>



                <NuxtLink to="/join-skkido" class="btn">
                    Put me on the waitlist
                </NuxtLink>
            </div>
            <div class="sk-hero-section__col-2">
                <img src="~/assets/images/Frame-48445.png" class="task-image" width="100%" alt=""></img>
            </div>
        </div>
    </section>
</template>

<script setup>
const avatars = [
    'avatars/avatar1.png',
    'avatars/avatar2.png',
    'avatars/avatar6.png',
    'avatars/avatar4.png',
    'avatars/avatar5.png',
    'avatars/avatar3.png',

]
</script>

<style lang="scss" scoped>
.sk-hero-section {
    display: flex;

    &__col-1 {
        flex: 1;
        padding-right: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
        }

        p {
            font-size: 1.125rem;
            margin-bottom: 2rem;
            color: #737373;
        }

        .pill {
            display: inline-block;
            width: fit-content;
            padding: 0.5rem 1rem;
            background-color: #A2878B;
            border-radius: 9999px;
            font-size: 0.8rem;
            font-weight: 500;
            color: #fff;
            text-align: center;
            line-height: 1.2;
        }

        .creators {
            display: flex;
            align-items: center;
            gap: 1rem;

            &__avatars {
                display: flex;

                .creators__avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    border: 2px solid #fff;
                    margin-left: -10px;
                    object-fit: cover;

                    &:first-child {
                        margin-left: 0;
                    }
                }
            }

            &__text {
                font-size: 1rem;
                color: #737373;
                width: 25%;
            }
        }

        .btn {
            background-color: var(--skkido-color-secondary);
            width: fit-content;
            color: var(--skkido-color-prinary);
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 0.375rem;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.3s ease;
            margin-top: 1rem;
            text-decoration: none;

            &:hover {
                background-color: #FFEBC3;
            }
        }
    }

    &__col-2 {

        .task-image {
            width: 600px;
        }

    }
}

@media (max-width: 990px) {
    .sk-hero-section {
        flex-direction: column !important;
        align-items: left;
        text-align: left;
        gap: 1rem;

        &__col-1 {
            padding-right: 0;
            margin-bottom: 1rem;

            h1 {
                font-size: 2.5rem;
            }

            p {
                font-size: 0.9rem;
            }

            .creators {
                &__text {
                    width: 100%;
                }
            }
        }

        &__col-2 {
            .task-image {
                width: 100%;
                max-width: 100%;
            }
        }
    }
}
</style>