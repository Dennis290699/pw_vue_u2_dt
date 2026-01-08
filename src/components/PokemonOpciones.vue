<template>
    <div class="opciones-container">
        <ul>
            <li>Pokemon1</li>
            <li>Pokemon2</li>
            <li>Pokemon3</li>
            <li>Pokemon4</li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>

    .opciones-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ul {
        list-style-type: none;
    }

    li {
        background-color: white;
        border: 1px solid black;
        border-radius: 5px;
        padding: 5px;
        margin: 5px;
        width: 250px;
        margin-top: 10px;
        cursor: pointer;
    }
</style>