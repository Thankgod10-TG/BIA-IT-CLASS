//ARRAYS

//Normal -array

const colors = ['Red', "Blue", "Black", 'Green', 'Yellow', 'Brown']

console.log('These are my Favourite Colors', colors)


//ARRAYS-OF-ARRAYS

const products = [
    shoes = ['Nike', 'Adidas','NewBalance'],
    bags = ['Guccci', 'Fendi', 'Calvin Klein'],
    clothes = ['Jersey', 'T-shirt', 'Suits'],
    electronics = ['Laptops', 'Toaster', 'Electrical Iron']
]

console.log('These are the products in my store', products[0][2])

// Array of Objects

const stores = [
    {
        id: 0,
        name: 'Peter Zogore',
        address: 'Terminus',
        contact: 548392,
    },
    {
          id: 1,
        name: 'Mafeng David',
        address: 'Village Hostel',
        contact: 54839212222,
    }, 
       {
          id: 2,
        name: 'Chung Pam',
        address: 'King Of Glory Hostel',
        contact: 484873837,
    }, 
       {
          id: 3,
        name: 'Onoja Godwin',
        address: 'King of GLory Hotel',
        contact: 94827212,
    }
]

const club =[
 {
    id: 0,
    name: "Golden State",
    no_of_players: 23,
    height_range: [6,6.1,6.2,6.3,6.4,6.8,6.10, 6.11,],
    top_payers: [
{
    id:77,
    jersey_number: 12,
    height: 6.3,
    name: 'Stef Curry',
    position: 'Point Guard'
},

{
    id:72,
    jersey_number: 44,
    height: 6.6,
    name: 'Jimmy Butler',
    position: 'Point Small Forward'
}
    ],
 }
]