<template>
  <div>
    <img
        class="quebec-city-logo"
        src="@/assets/img/ville-quebec.svg"
        :alt="t('Ville de Québec l’accent d’Amérique')"
        width="276"
        height="81"
    />
    <img
        class="quebec-city-logo"
        src="@/assets/img/ville-quebec.svg"
        :alt="'Ville de Québec l’accent d’Amérique'"
        width="276"
        height="81"
    />
    <img
        class="quebec-city-logo"
        src="@/assets/img/ville-quebec.svg"
        alt="Ville de Québec l’accent d’Amérique"
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
        "Ville de Québec l’accent d’Amérique": "Québec City l’accent d’Amérique",
    }
}
</i18n>
