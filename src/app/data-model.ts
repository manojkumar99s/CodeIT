export class Employee {
    id = 0;
    name = '';
    addresses : Address[];        
 }
export class Address{
    street= '';
    city = '';
    zip = '';
    state = '';
}

export const employees: Employee[]=
[{
    id: 1,
    name: 'Whirlwind',  
    addresses:[
        {street:'123 main',city:'Anywhere',state:'CA',zip:'94801'},
        {street:'234 street',city:'Somewhere',state:'LA',zip:'52458'}
    ]
},
{
    id:2,
    name:'Mack Win',
    addresses:[
        {street:'53 down',city:'smallville',state:'LA',zip:'14587'}
    ]
},
{
    id:3,
    name:'John Wick',
    addresses:[        
    ]
},
];

export const states = ['CA','LA','MD'];
