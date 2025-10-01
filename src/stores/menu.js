import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu',  {
    state: () => {
        const menu = {
            0:{
                name: 'Salmon',
                image: "/images/menu/baked-salmon-garnished.jpg",
                price: 1250,
                description: 'Baked salmon garnished with asparagus',
                longDescription: '',
                category: 'food',
            },
            1:{
                name: 'Fish',
                image: "/images/menu/close-up-meal.jpg",
                price: 1250,
                description: 'main',
                longDescription: '',
                category: 'food',
            },
            2:{
                name: 'Shrimp',
                image: "/images/menu/fried-shrimps.jpg",
                price: 450,
                description: 'appetizer',
                longDescription: '',
                category: 'food',
            },
            3:{
                name: 'Steak 1',
                image: "/images/menu/grilled-beef-steak1.jpg",
                price: 1000,
                description: 'main',
                longDescription: '',
                category: 'food',
            },
            4:{
                name: 'Steak 2',
                image: "/images/menu/grilled-beef-steak2.jpg",
                price: 950,
                description: 'main',
                longDescription: '',
                category: 'food',
            },
            5:{
                name: 'Steak 3',
                image: "/images/menu/grilled-beef-steak3.jpg",
                price: 1150,
                description: 'main',
                longDescription: '',
                category: 'food',
            },
            6:{
                name: 'Fried Chicken',
                image: "/images/menu/japanese-barbecue1.jpg",
                price: 500,
                description: 'main',
                longDescription: '',
                category: 'food',
            },
            7:{
                name: 'Chicken',
                image: "/images/menu/japanese-barbecue2.jpg",
                price: 650,
                description: 'main',
                longDescription: '',
                category: 'food',
            },
            8:{
                name: 'Lobster',
                image: "/images/menu/lobster-with-lemon.jpg",
                price: 1350,
                description: 'appetizer',
                longDescription: '',
                category: 'food',
            },
            9:{
                name: 'Fish Steak',
                image: "/images/menu/p-fish-steak.jpg",
                price: 250,
                description: 'main',
                longDescription: '',
                category: 'food',
            },
            10:{
                name: 'Steak 4',
                image: "/images/menu/steak-grilled.jpg",
                price: 250,
                description: 'main',
                longDescription: '',
                category: 'food',
            }
        }
       
        const selectedMenuItem = ref(null)

        return { menu, selectedMenuItem }
    },
    actions:{
         updateSelectedMenuItem (menuItem) {
           this.selectedMenuItem = menuItem
       }
    }
})