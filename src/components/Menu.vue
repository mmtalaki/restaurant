<script setup>
import { useMenuStore } from '@/stores/menu'
import { useRouter } from 'vue-router'; 

const router=useRouter();
const menuStore=useMenuStore()
const menu=menuStore.menu

function view(menu){
    menuStore.updateSelectedMenuItem(menu)
    router.push('/menuitem')
}
</script>

<template>
<h1> Menu</h1>

<v-container>
    <v-row>
        <v-col md="3" v-for="item in menu" :key = "item">
            <v-card color="deep-purple-accent-2">
                <v-img :src="item.image" height="200" cover></v-img>
                <v-row>
                    <v-col md="6">
                        <v-card-title>{{item.name}}</v-card-title>
                    </v-col>
                    <v-col md="6">
                        <v-chip>{{item.category}}</v-chip>
                    </v-col>
                </v-row>
                <v-card-title>{{item.description}}</v-card-title>
                <v-card-subtitle>{{item.price}}</v-card-subtitle>
                <v-card-actions>
                    <v-btn @click="view(item)">View</v-btn>
                    <v-btn>Order</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>