<template>
    <nav>
        <div>
            <p>Hi there ... display name</p>
            <p class="email">currently login as ... email</p>
        </div>
        <button @click="handleClick">Logout</button>
    </nav>
</template>

<script>
import useLogout from "../composables/useLogout"

export default {
    setup() {
        const { logout, error } = useLogout()

        const handleClick = async () => {
            await logout()
            if (!error.value) {
                console.log("user logged")
            }
        }

        return { handleClick }
    },
}
</script>

<style></style>
