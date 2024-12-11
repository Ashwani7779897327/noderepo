const mongoose = require("mongoose");

const bootcampSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,"Please add a name"],
        unique:true,
        trim:true,
        maxlength:[25,"Name cann't be more than 25 charecter"]
    },
    slug :String,
    description:{
        type:String,
        required:[true,"Please add a Desc"],
        maxlength:[200,"Description cann't be more than 200 charecter"]
    },

    website: { 
        type: String,
        match: [
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
            'Please use a valid URL with HTTP or HTTPS'
        ]
    },
    phoneno: {
        type: String,
        maxlength :[12,'Phone no length is not more than 10'],
        match :[/^\+?[1-9]\d{1,14}$/,'Please enter a valid phone no']
    },
    email:{
        type :String,
        match :[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
,       'Please enter valid email']
    },

    address:{
        type:String,
        required :[true, 'Please enter an address'],
    },

    location :{
        type: {
            type: String,
            enum: ['Point'],
            required: true
          },
          coordinates: {
            type: [Number],
            required: true,
            index:'2dsphere'
          },
          formattedAddress: String,
          Street: String,
          city: String,
          state: String,
          zipcode: String,
          country: String,

    },
    carrers:{
        //array of string 
        type:[String],
        enum:
        ['WebDevlopment',
            'MobileDevelopement',
            'UI/UX',
            'BackendDevelopement',
            'Business',
            'CyberSecurity',
            'Data Science',
            'Others'
        ],
        required:true
    },
   
    averageRating:{
        type:Number,
        min:['1','Rating must be at least 1'],
        max:['10','Rating must can not be more than 10']
    },
    averageCost:Number,
    photo:{
        type:String,
        default:"no-photo.jpg"
    },

    housing:{
        type:Boolean,
        default:false
    },
    JobAssistence:{
        type:Boolean,
        default:false
    },
    jobGuarentee:{
        type:Boolean,
        default:false
    },
    acceptGi:{
        type:Boolean,
        default:false
    },
    createdDate:{
type: Date,
default: Date.now,

    }


});

module.exports=mongoose.model('Bootcamps',bootcampSchema);