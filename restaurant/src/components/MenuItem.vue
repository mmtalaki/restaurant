<script setup>
const menuItem = {
        name: 'Baked Salmon',
        image: "/images/menu/baked-salmon-garnished.jpg",
        price: 1250,
        description: 'main',
        category: 'food',
}
</script>

<template>
<v-container fluid class="d-flex fill-height" align="center">
    <v-row>
        <v-col md="6">
            <v-card class="pa-6 rounded-lg" justify="center">
                <v-img :src="menuItem.image" cover height="500"></v-img>
            </v-card>
        </v-col>
        <v-col md="6">
            <v-card class="pa-6 rounded-lg" justify="center">
                <v-card-title>{{ menuItem.name }}</v-card-title>
                <v-card-subtitle>{{ menuItem.price }}</v-card-subtitle>
                <v-card-text>{{ menuItem.description }}</v-card-text>
                <v-card-text> Quantity <v-text-field></v-text-field></v-card-text>
                <v-card-actions>
                    <v-btn color="deep-purple-accent-2">Order</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>
