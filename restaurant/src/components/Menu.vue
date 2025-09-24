<script setup>

const menu = {
    0:{
        name: 'Baked Salmon',
        image: "/images/menu/baked-salmon-garnished.jpg",
        price: 1250,
        description: 'main',
        category: 'food',
    },
    1:{
        name: 'Fish',
        image: "/images/menu/close-up-meal.jpg",
        price: 1250,
        description: 'main',
        category: 'food',
    },
    2:{
        name: 'Shrimp',
        image: "/images/menu/fried-shrimps.jpg",
        price: 450,
        description: 'appetizer',
        category: 'food',
    },
    3:{
        name: 'Steak 1',
        image: "/images/menu/grilled-beef-steak1.jpg",
        price: 1000,
        description: 'main',
        category: 'food',
    },
    4:{
        name: 'Steak 2',
        image: "/images/menu/grilled-beef-steak2.jpg",
        price: 950,
        description: 'main',
        category: 'food',
    },
    5:{
        name: 'Steak 3',
        image: "/images/menu/grilled-beef-steak3.jpg",
        price: 1150,
        description: 'main',
        category: 'food',
    },
    6:{
        name: 'Fried Chicken',
        image: "/images/menu/japanese-barbecue1.jpg",
        price: 500,
        description: 'main',
        category: 'food',
    },
    7:{
        name: 'Chicken',
        image: "/images/menu/japanese-barbecue2.jpg",
        price: 650,
        description: 'main',
        category: 'food',
    },
    8:{
        name: 'Lobster',
        image: "/images/menu/lobster-with-lemon.jpg",
        price: 1350,
        description: 'appetizer',
        category: 'food',
    },
    9:{
        name: 'Fish Steak',
        image: "/images/menu/p-fish-steak.jpg",
        price: 250,
        description: 'main',
        category: 'food',
    },
    10:{
        name: 'Steak 4',
        image: "/images/menu/steak-grilled.jpg",
        price: 250,
        description: 'main',
        category: 'food',
    }
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
                <v-card-subtitle>{{description}}</v-card-subtitle>
                <v-card-actions>
                    <v-card-title>{{price}}</v-card-title>
                    <v-btn>Order</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>