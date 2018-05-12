'use strict';

//var databese =require('../database'),
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AutoSchema = new Schema(
    {
        marca: {
            type: String,
            trim: true,
            default: '',
            required: 'Inserta una marca por favor',
            index: {
                unique: false,
                dropDups: true
            }
        },
        modelo: {
            type: String,
            required: 'Inserta un modelo por favor',
            default: '',
            index: {
                unique: false,
                dropDups: true
            }
        },
        anio: {
            type: Number,
            required: 'Inserta un año por favor',
            default: '',
            index: {
                unique: false,
                dropDups: true
            }
        },

        version: {
            type: String,
            trim: true,
            require: 'Inserta una version favor',
            default: '',
            index: {
                unique: false

            }
        }
    },
    {
        timestamps: true
    }
);

var Auto = mongoose.model('Auto', AutoSchema)

module.exports = Auto;