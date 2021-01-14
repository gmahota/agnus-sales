import { ErrorRequestHandler } from 'express';
import {ValidationError } from 'yup'

interface ValidationErrors{
    [key:string]:string[];
}

const errorHandler: ErrorRequestHandler =(error,request,response,next) => {

    if(error instanceof ValidationError){
        let errors:ValidationErrors ={};

        error.inner.forEach(err=>{
            const path = err.path || ""
            if(path.length > 0){
                errors[path]= err.errors;
            }
        });

        return response.status(400).json({message:"Validation Errors",errors});
    }
    
    error.status =500
    error.message ="Internal server error"
    next(error)    
}

export default errorHandler;