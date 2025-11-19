<template>
  <div>
    <img
        class="quebec-city-logo"
        src="@/assets/img/ville-quebec.svg?url"
        :alt="t('Partenaires')"
        width="276"
        height="81"
    />
    <img
        class="quebec-city-logo"
        src="@/assets/img/ville-quebec.svg?url"
        :alt="'Test'"
        width="276"
        height="81"
    />
  </div>
</template>

<script setup>
const { t, locale } = useI18n();
console.log(locale.value);
</script>

<style>
html {
    background-color: black;
}
</style>


<i18n lang="json">
{
    "en": {
        "Partenaires": "Partners"
    }
}
</i18n>
