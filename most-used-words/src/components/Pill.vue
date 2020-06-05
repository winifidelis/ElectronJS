<template>
<div class="pill">
  <span class="name">{{ name }}</span>
  <span class="amount">{{ amount }}</span>
</div>
</template>

<script>
export default {
    props: ['name', 'amount']
}
</script>

<style>
    .pill {
        margin: 5px;
        height: 55px;
        border-radius: 27px;
        background-color: #1B9AAA;
        color: #fff;
        font-size: 1rem;
        font-weight: bold;
        display: flex;
        align-items: center;
    }

    .pill .name {
        margin-left: 15px;
    }

    .pill .amount {
        margin: 10px;
        padding: 5px;
        height: 35px;
        width: 35px;
        border-radius: 18px;
        background-color: #fff;
        color: #323232;
        font-size: 14px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>