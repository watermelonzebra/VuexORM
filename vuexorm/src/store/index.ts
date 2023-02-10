import { createStore } from "vuex";
import VuexORM from "@vuex-orm/core";
import database from "./database";

const store = createStore({
    plugins: [VuexORM.install(database)],
});

export default store;
