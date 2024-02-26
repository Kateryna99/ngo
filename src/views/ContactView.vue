<template>
<main-master-page>
<contacts-banner/>
  <contacts-form/>
</main-master-page>
</template>

<script>
import MainMasterPage from "@/masterPages/MainMasterPage";
import ContactsBanner from "@/components/contactsComponents/ContactsBanner";
import ContactsForm from "@/components/generals/ContactsForm";

export default {
  name: "ContactView",
  components: {ContactsForm, ContactsBanner, MainMasterPage}
}
</script>

<style scoped>

</style>