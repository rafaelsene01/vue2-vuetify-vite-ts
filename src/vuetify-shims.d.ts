/*eslint @typescript-eslint/no-unused-vars: "off"*/
import Vue from "vue";
import { Vuetify } from "vuetify/types";

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    vuetify?: Vuetify;
  }
}
