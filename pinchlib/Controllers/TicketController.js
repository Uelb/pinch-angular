/**
  *PinchLib
  *
  * This file was automatically generated for Pinch by APIMATIC v2.0 ( https://apimatic.io ) on 05/13/2016
  */

'use strict';
angular.module('PinchLib').factory('TicketController',function($q,Configuration,HttpClient,APIHelper){
    return{
        /**
         * List all the opened tickets of every clients you are working for
         *
         * @return {promise<array>}
         */
        list : function(){

            //Create promise to return
            var _deffered= $q.defer();
            

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/tickets";
            
            //validate and preprocess url
            var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
            
            //prepare headers
            var _headers = {
                "accept" : "application/json",
                "X-API-TOKEN" : Configuration.xAPITOKEN,
                "X-API-EMAIL" : Configuration.xAPIEMAIL
            };

            //append custom auth authorization
            CustomAuthUtility.appendCustomAuthParams(_headers);

            //prepare and invoke the API call request to fetch the response
            var _config = {
                method : "GET",
                queryUrl : _queryUrl,
                headers: _headers,
            };
            
            var _response = HttpClient(_config);
            
            //process response
            _response.then(function(_result){
                _deffered.resolve(_result.body);
            },function(_result){
                //Error handling for custom HTTP status codes
                if(_result.code == 404){
                    _deffered.resolve(null);
                } else if (_result.code == 401) {
                    _deffered.reject(APIHelper.appendContext({errorMessage: "Your API key is incorrect", errorCode: 401, errorResponse: _result.message},_result.getContext()));
                } else if (_result.code == 400) {
                    _deffered.reject(APIHelper.appendContext({errorMessage: "There is an error in the parameters you send", errorCode: 400, errorResponse: _result.message},_result.getContext()));
                }_deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message},_result.getContext()));
            }
        });
        
        return _deffered.promise;
    },
    /**
     * This method returns no result but the status code tells you if the operation succedded
     * @param {string} ticketId    Required parameter: Example: 
     *
     * @return {promise<Ticket>}
     */
    acceptIntervention : function(ticketId){

        //Create promise to return
        var _deffered= $q.defer();
        
        //validating required parameters
        var _missingArgs = false;
        if (ticketId == null || ticketId == undefined){
            _deffered.reject({errorMessage: "The parameter 'ticketId' is a required parameter and cannot be null.", errorCode: -1});
            _missingArgs = true;
        }

        if (_missingArgs)
            return deffered.promise

        //prepare query string for API call
        var _baseUri = Configuration.BASEURI
        var _queryBuilder = _baseUri + "/tickets/{ticket_id}/accept";
        
        //Process template parameters
        _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ticket_id" : ticketId
        });

        //validate and preprocess url
        var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "X-API-TOKEN" : Configuration.xAPITOKEN,
            "X-API-EMAIL" : Configuration.xAPIEMAIL
        };

        //append custom auth authorization
        CustomAuthUtility.appendCustomAuthParams(_headers);

        //prepare and invoke the API call request to fetch the response
        var _config = {
            method : "POST",
            queryUrl : _queryUrl,
            headers: _headers,
        };
        
        var _response = HttpClient(_config);
        
        //process response
        _response.then(function(_result){
            _deffered.resolve(_result.body);
        },function(_result){
            //Error handling for custom HTTP status codes
            if(_result.code == 404){
                _deffered.resolve(null);
            } else if (_result.code == 401) {
                _deffered.reject(APIHelper.appendContext({errorMessage: "Your API key is incorrect", errorCode: 401, errorResponse: _result.message},_result.getContext()));
            } else if (_result.code == 400) {
                _deffered.reject(APIHelper.appendContext({errorMessage: "There is an error in the parameters you send", errorCode: 400, errorResponse: _result.message},_result.getContext()));
            }_deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message},_result.getContext()));
        }
    });
    
    return _deffered.promise;
},
    /**
     * TODO: type endpoint description here
     * @param {DateTime} interventionDate    Required parameter: Example: 
     * @param {string} ticketId    Required parameter: Example: 
     *
     * @return {promise<Ticket>}
     */
    setInterventionDate : function(interventionDate, ticketId){

        //Create promise to return
        var _deffered= $q.defer();
        
        //validating required parameters
        var _missingArgs = false;
        if (interventionDate == null || interventionDate == undefined){
            _deffered.reject({errorMessage: "The parameter 'interventionDate' is a required parameter and cannot be null.", errorCode: -1});
            _missingArgs = true;
        } else if (ticketId == null || ticketId == undefined){
            _deffered.reject({errorMessage: "The parameter 'ticketId' is a required parameter and cannot be null.", errorCode: -1});
            _missingArgs = true;
        }

        if (_missingArgs)
            return deffered.promise

        //prepare query string for API call
        var _baseUri = Configuration.BASEURI
        var _queryBuilder = _baseUri + "/tickets/{ticket_id}/set_intervention_date";
        
        //Process template parameters
        _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ticket_id" : ticketId
        });

        //validate and preprocess url
        var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "X-API-TOKEN" : Configuration.xAPITOKEN,
            "X-API-EMAIL" : Configuration.xAPIEMAIL
        };

        //prepare form data
        var _form = {
            "intervention_date" : interventionDate
        };

        //Remove null values
        APIHelper.cleanObject(_form);

        //append custom auth authorization
        CustomAuthUtility.appendCustomAuthParams(_headers);

        //prepare and invoke the API call request to fetch the response
        var _config = {
            method : "POST",
            queryUrl : _queryUrl,
            headers: _headers,
            form : _form,
        };
        
        var _response = HttpClient(_config);
        
        //process response
        _response.then(function(_result){
            _deffered.resolve(_result.body);
        },function(_result){
            //Error handling for custom HTTP status codes
            if(_result.code == 404){
                _deffered.resolve(null);
            } else if (_result.code == 401) {
                _deffered.reject(APIHelper.appendContext({errorMessage: "Your API key is incorrect", errorCode: 401, errorResponse: _result.message},_result.getContext()));
            } else if (_result.code == 400) {
                _deffered.reject(APIHelper.appendContext({errorMessage: "There is an error in the parameters you send", errorCode: 400, errorResponse: _result.message},_result.getContext()));
            }_deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message},_result.getContext()));
        }
    });
    
    return _deffered.promise;
},
    /**
     * TODO: type endpoint description here
     * @param {string} file    Required parameter: Example: 
     * @param {string} ticketId    Required parameter: Example: 
     *
     * @return {promise<Ticket>}
     */
    uploadQuote : function(file, ticketId){

        //Create promise to return
        var _deffered= $q.defer();
        
        //validating required parameters
        var _missingArgs = false;
        if (file == null || file == undefined){
            _deffered.reject({errorMessage: "The parameter 'file' is a required parameter and cannot be null.", errorCode: -1});
            _missingArgs = true;
        } else if (ticketId == null || ticketId == undefined){
            _deffered.reject({errorMessage: "The parameter 'ticketId' is a required parameter and cannot be null.", errorCode: -1});
            _missingArgs = true;
        }

        if (_missingArgs)
            return deffered.promise

        //prepare query string for API call
        var _baseUri = Configuration.BASEURI
        var _queryBuilder = _baseUri + "/tickets/{ticket_id}/quote_upload";
        
        //Process template parameters
        _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ticket_id" : ticketId
        });

        //validate and preprocess url
        var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "X-API-TOKEN" : Configuration.xAPITOKEN,
            "X-API-EMAIL" : Configuration.xAPIEMAIL
        };

        //prepare form data
        var _formDataDictionary = {
            "file" : file
        };

        //Remove null values
        APIHelper.cleanObject(_formDataDictionary);

        //append custom auth authorization
        CustomAuthUtility.appendCustomAuthParams(_headers);

        //prepare and invoke the API call request to fetch the response
        var _config = {
            method : "POST",
            queryUrl : _queryUrl,
            headers: _headers,
            formData : _formDataDictionary,
        };
        
        var _response = HttpClient(_config);
        
        //process response
        _response.then(function(_result){
            _deffered.resolve(_result.body);
        },function(_result){
            //Error handling for custom HTTP status codes
            if(_result.code == 404){
                _deffered.resolve(null);
            } else if (_result.code == 401) {
                _deffered.reject(APIHelper.appendContext({errorMessage: "Your API key is incorrect", errorCode: 401, errorResponse: _result.message},_result.getContext()));
            } else if (_result.code == 400) {
                _deffered.reject(APIHelper.appendContext({errorMessage: "There is an error in the parameters you send", errorCode: 400, errorResponse: _result.message},_result.getContext()));
            }_deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message},_result.getContext()));
        }
    });
    
    return _deffered.promise;
},
    /**
     * TODO: type endpoint description here
     * @param {string} body    Required parameter: Example: 
     * @param {string} ticketId    Required parameter: Example: 
     *
     * @return {promise<Ticket>}
     */
    sendMessage : function(body, ticketId){

        //Create promise to return
        var _deffered= $q.defer();
        
        //validating required parameters
        var _missingArgs = false;
        if (body == null || body == undefined){
            _deffered.reject({errorMessage: "The parameter 'body' is a required parameter and cannot be null.", errorCode: -1});
            _missingArgs = true;
        } else if (ticketId == null || ticketId == undefined){
            _deffered.reject({errorMessage: "The parameter 'ticketId' is a required parameter and cannot be null.", errorCode: -1});
            _missingArgs = true;
        }

        if (_missingArgs)
            return deffered.promise

        //prepare query string for API call
        var _baseUri = Configuration.BASEURI
        var _queryBuilder = _baseUri + "/tickets/{ticket_id}/message";
        
        //Process template parameters
        _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ticket_id" : ticketId
        });

        //validate and preprocess url
        var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "X-API-TOKEN" : Configuration.xAPITOKEN,
            "X-API-EMAIL" : Configuration.xAPIEMAIL
        };

        //prepare form data
        var _form = {
            "body" : body
        };

        //Remove null values
        APIHelper.cleanObject(_form);

        //append custom auth authorization
        CustomAuthUtility.appendCustomAuthParams(_headers);

        //prepare and invoke the API call request to fetch the response
        var _config = {
            method : "POST",
            queryUrl : _queryUrl,
            headers: _headers,
            form : _form,
        };
        
        var _response = HttpClient(_config);
        
        //process response
        _response.then(function(_result){
            _deffered.resolve(_result.body);
        },function(_result){
            //Error handling for custom HTTP status codes
            if(_result.code == 404){
                _deffered.resolve(null);
            } else if (_result.code == 401) {
                _deffered.reject(APIHelper.appendContext({errorMessage: "Your API key is incorrect", errorCode: 401, errorResponse: _result.message},_result.getContext()));
            } else if (_result.code == 400) {
                _deffered.reject(APIHelper.appendContext({errorMessage: "There is an error in the parameters you send", errorCode: 400, errorResponse: _result.message},_result.getContext()));
            }_deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message},_result.getContext()));
        }
    });
    
    return _deffered.promise;
},
    /**
     * TODO: type endpoint description here
     * @param {string} ticketId    Required parameter: Example: 
     * @param {DateTime|null} interventionDate    Optional parameter: Example: 
     *
     * @return {promise<Ticket>}
     */
    declareInterventionDone : function(ticketId, interventionDate){

        //Create promise to return
        var _deffered= $q.defer();
        
        //validating required parameters
        var _missingArgs = false;
        if (ticketId == null || ticketId == undefined){
            _deffered.reject({errorMessage: "The parameter 'ticketId' is a required parameter and cannot be null.", errorCode: -1});
            _missingArgs = true;
        }

        if (_missingArgs)
            return deffered.promise

        //prepare query string for API call
        var _baseUri = Configuration.BASEURI
        var _queryBuilder = _baseUri + "/tickets/{ticket_id}/intervention_done";
        
        //Process template parameters
        _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ticket_id" : ticketId
        });

        //validate and preprocess url
        var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "X-API-TOKEN" : Configuration.xAPITOKEN,
            "X-API-EMAIL" : Configuration.xAPIEMAIL
        };

        //prepare form data
        var _form = {
            "intervention_date" : interventionDate
        };

        //Remove null values
        APIHelper.cleanObject(_form);

        //append custom auth authorization
        CustomAuthUtility.appendCustomAuthParams(_headers);

        //prepare and invoke the API call request to fetch the response
        var _config = {
            method : "POST",
            queryUrl : _queryUrl,
            headers: _headers,
            form : _form,
        };
        
        var _response = HttpClient(_config);
        
        //process response
        _response.then(function(_result){
            _deffered.resolve(_result.body);
        },function(_result){
            //Error handling for custom HTTP status codes
            if(_result.code == 404){
                _deffered.resolve(null);
            } else if (_result.code == 401) {
                _deffered.reject(APIHelper.appendContext({errorMessage: "Your API key is incorrect", errorCode: 401, errorResponse: _result.message},_result.getContext()));
            } else if (_result.code == 400) {
                _deffered.reject(APIHelper.appendContext({errorMessage: "There is an error in the parameters you send", errorCode: 400, errorResponse: _result.message},_result.getContext()));
            }_deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message},_result.getContext()));
        }
    });
    
    return _deffered.promise;
},
    /**
     * The document should not be an invoice nor a quote
     * @param {string} file    Required parameter: Example: 
     * @param {string} ticketId    Required parameter: Example: 
     *
     * @return {promise<Ticket>}
     */
    uploadDocument : function(file, ticketId){

        //Create promise to return
        var _deffered= $q.defer();
        
        //validating required parameters
        var _missingArgs = false;
        if (file == null || file == undefined){
            _deffered.reject({errorMessage: "The parameter 'file' is a required parameter and cannot be null.", errorCode: -1});
            _missingArgs = true;
        } else if (ticketId == null || ticketId == undefined){
            _deffered.reject({errorMessage: "The parameter 'ticketId' is a required parameter and cannot be null.", errorCode: -1});
            _missingArgs = true;
        }

        if (_missingArgs)
            return deffered.promise

        //prepare query string for API call
        var _baseUri = Configuration.BASEURI
        var _queryBuilder = _baseUri + "/tickets/{ticket_id}/document_upload";
        
        //Process template parameters
        _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ticket_id" : ticketId
        });

        //validate and preprocess url
        var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "X-API-TOKEN" : Configuration.xAPITOKEN,
            "X-API-EMAIL" : Configuration.xAPIEMAIL
        };

        //prepare form data
        var _formDataDictionary = {
            "file" : file
        };

        //Remove null values
        APIHelper.cleanObject(_formDataDictionary);

        //append custom auth authorization
        CustomAuthUtility.appendCustomAuthParams(_headers);

        //prepare and invoke the API call request to fetch the response
        var _config = {
            method : "POST",
            queryUrl : _queryUrl,
            headers: _headers,
            formData : _formDataDictionary,
        };
        
        var _response = HttpClient(_config);
        
        //process response
        _response.then(function(_result){
            _deffered.resolve(_result.body);
        },function(_result){
            //Error handling for custom HTTP status codes
            if(_result.code == 404){
                _deffered.resolve(null);
            } else if (_result.code == 401) {
                _deffered.reject(APIHelper.appendContext({errorMessage: "Your API key is incorrect", errorCode: 401, errorResponse: _result.message},_result.getContext()));
            } else if (_result.code == 400) {
                _deffered.reject(APIHelper.appendContext({errorMessage: "There is an error in the parameters you send", errorCode: 400, errorResponse: _result.message},_result.getContext()));
            }_deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message},_result.getContext()));
        }
    });
    
    return _deffered.promise;
},
    /**
     * TODO: type endpoint description here
     * @param {string} file    Required parameter: Example: 
     * @param {string} ticketId    Required parameter: Example: 
     *
     * @return {promise<Ticket>}
     */
    uploadPicture : function(file, ticketId){

        //Create promise to return
        var _deffered= $q.defer();
        
        //validating required parameters
        var _missingArgs = false;
        if (file == null || file == undefined){
            _deffered.reject({errorMessage: "The parameter 'file' is a required parameter and cannot be null.", errorCode: -1});
            _missingArgs = true;
        } else if (ticketId == null || ticketId == undefined){
            _deffered.reject({errorMessage: "The parameter 'ticketId' is a required parameter and cannot be null.", errorCode: -1});
            _missingArgs = true;
        }

        if (_missingArgs)
            return deffered.promise

        //prepare query string for API call
        var _baseUri = Configuration.BASEURI
        var _queryBuilder = _baseUri + "/tickets/{ticket_id}/picture_upload";
        
        //Process template parameters
        _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ticket_id" : ticketId
        });

        //validate and preprocess url
        var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "X-API-TOKEN" : Configuration.xAPITOKEN,
            "X-API-EMAIL" : Configuration.xAPIEMAIL
        };

        //prepare form data
        var _formDataDictionary = {
            "file" : file
        };

        //Remove null values
        APIHelper.cleanObject(_formDataDictionary);

        //append custom auth authorization
        CustomAuthUtility.appendCustomAuthParams(_headers);

        //prepare and invoke the API call request to fetch the response
        var _config = {
            method : "POST",
            queryUrl : _queryUrl,
            headers: _headers,
            formData : _formDataDictionary,
        };
        
        var _response = HttpClient(_config);
        
        //process response
        _response.then(function(_result){
            _deffered.resolve(_result.body);
        },function(_result){
            //Error handling for custom HTTP status codes
            if(_result.code == 404){
                _deffered.resolve(null);
            } else if (_result.code == 401) {
                _deffered.reject(APIHelper.appendContext({errorMessage: "Your API key is incorrect", errorCode: 401, errorResponse: _result.message},_result.getContext()));
            } else if (_result.code == 400) {
                _deffered.reject(APIHelper.appendContext({errorMessage: "There is an error in the parameters you send", errorCode: 400, errorResponse: _result.message},_result.getContext()));
            }_deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message},_result.getContext()));
        }
    });
    
    return _deffered.promise;
},
    /**
     * TODO: type endpoint description here
     * @param {string} ticketId    Required parameter: Example: 
     *
     * @return {promise<Ticket>}
     */
    get : function(ticketId){

        //Create promise to return
        var _deffered= $q.defer();
        
        //validating required parameters
        var _missingArgs = false;
        if (ticketId == null || ticketId == undefined){
            _deffered.reject({errorMessage: "The parameter 'ticketId' is a required parameter and cannot be null.", errorCode: -1});
            _missingArgs = true;
        }

        if (_missingArgs)
            return deffered.promise

        //prepare query string for API call
        var _baseUri = Configuration.BASEURI
        var _queryBuilder = _baseUri + "/tickets/{ticket_id}";
        
        //Process template parameters
        _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "ticket_id" : ticketId
        });

        //validate and preprocess url
        var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "X-API-TOKEN" : Configuration.xAPITOKEN,
            "X-API-EMAIL" : Configuration.xAPIEMAIL
        };

        //append custom auth authorization
        CustomAuthUtility.appendCustomAuthParams(_headers);

        //prepare and invoke the API call request to fetch the response
        var _config = {
            method : "GET",
            queryUrl : _queryUrl,
            headers: _headers,
        };
        
        var _response = HttpClient(_config);
        
        //process response
        _response.then(function(_result){
            _deffered.resolve(_result.body);
        },function(_result){
            //Error handling for custom HTTP status codes
            if(_result.code == 404){
                _deffered.resolve(null);
            } else if (_result.code == 401) {
                _deffered.reject(APIHelper.appendContext({errorMessage: "Your API key is incorrect", errorCode: 401, errorResponse: _result.message},_result.getContext()));
            } else if (_result.code == 400) {
                _deffered.reject(APIHelper.appendContext({errorMessage: "There is an error in the parameters you send", errorCode: 400, errorResponse: _result.message},_result.getContext()));
            }_deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message},_result.getContext()));
        }
    });
    
    return _deffered.promise;
}
}
});