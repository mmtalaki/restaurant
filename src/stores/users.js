import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users',  {
    state: () => {
        const users={
            0:{
                name: 'John Doe',
                email: 'john@example.com',
                phone: 254162345678,
                deliveryAddress: '123 Madaraka',
                password: 'qwertyuio',
                userType: 'Customer',
                activeAccount: true
            },
            1:{
                name: 'Jane Doe',
                email: 'jane@example.com',
                phone: 254120395678,
                deliveryAddress: '123 Madaraka',
                password: 'qwertyuio',
                userType: 'Customer',
                activeAccount: true
            },
            2:{
                name: 'Jack Doe',
                email: 'jack@example.com',
                phone: 254723452789,
                deliveryAddress: '123 Madaraka',
                password: 'qwertyuio',
                userType: 'Admin',
                activeAccount: true
            },
            3:{
                name: 'Jill Doe',
                email: 'jill@example.com',
                phone: 254722945678,
                deliveryAddress: '123 Madaraka',
                password: 'qwertyuio',
                userType: 'Customer',
                activeAccount: true
            },
            4:{
                name: 'Judith Doe',
                email: 'judith@example.com',
                phone: 25412345678,
                deliveryAddress: '123 Madaraka',
                password: 'qwertyuio',
                userType: 'Customer',
                activeAccount: false
            }
        }
        return { users }
    },
    actions:{
         
    }
})