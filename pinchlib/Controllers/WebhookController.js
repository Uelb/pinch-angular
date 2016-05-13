/**
  *PinchLib
  *
  * This file was automatically generated for Pinch by APIMATIC v2.0 ( https://apimatic.io ) on 05/13/2016
  */

'use strict';
angular.module('PinchLib').factory('WebhookController',function($q,Configuration,HttpClient,APIHelper){
    return{
        /**
         * List the webhooks of the current user
         *
         * @return {promise<array>}
         */
        list : function(){

            //Create promise to return
            var _deffered= $q.defer();
            

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/webhooks";
            
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
     * TODO: type endpoint description here
     * @param {Webhook} webhook    Required parameter: Example: 
     *
     * @return {promise<Webhook>}
     */
    create : function(webhook){

        //Create promise to return
        var _deffered= $q.defer();
        
        //validating required parameters
        var _missingArgs = false;
        if (webhook == null || webhook == undefined){
            _deffered.reject({errorMessage: "The parameter 'webhook' is a required parameter and cannot be null.", errorCode: -1});
            _missingArgs = true;
        }

        if (_missingArgs)
            return deffered.promise

        //prepare query string for API call
        var _baseUri = Configuration.BASEURI
        var _queryBuilder = _baseUri + "/webhooks";
        
        //validate and preprocess url
        var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "content-type" : "application/json; charset=utf-8",
            "X-API-TOKEN" : Configuration.xAPITOKEN,
            "X-API-EMAIL" : Configuration.xAPIEMAIL
        };

        //append custom auth authorization
        CustomAuthUtility.appendCustomAuthParams(_headers);

        //Remove null values
        APIHelper.cleanObject(webhook);

        //prepare and invoke the API call request to fetch the response
        var _config = {
            method : "POST",
            queryUrl : _queryUrl,
            headers: _headers,
            body : webhook
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
     * @param {int} webhookId    Required parameter: Example: 
     * @param {Webhook|null} webhook    Optional parameter: Example: 
     *
     * @return {promise<Webhook>}
     */
    update : function(webhookId, webhook){

        //Create promise to return
        var _deffered= $q.defer();
        
        //validating required parameters
        var _missingArgs = false;
        if (webhookId == null || webhookId == undefined){
            _deffered.reject({errorMessage: "The parameter 'webhookId' is a required parameter and cannot be null.", errorCode: -1});
            _missingArgs = true;
        }

        if (_missingArgs)
            return deffered.promise

        //prepare query string for API call
        var _baseUri = Configuration.BASEURI
        var _queryBuilder = _baseUri + "/webhooks/{webhook_id}";
        
        //Process template parameters
        _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "webhook_id" : webhookId
        });

        //validate and preprocess url
        var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "content-type" : "application/json; charset=utf-8",
            "X-API-TOKEN" : Configuration.xAPITOKEN,
            "X-API-EMAIL" : Configuration.xAPIEMAIL
        };

        //append custom auth authorization
        CustomAuthUtility.appendCustomAuthParams(_headers);

        //Remove null values
        APIHelper.cleanObject(webhook);

        //prepare and invoke the API call request to fetch the response
        var _config = {
            method : "PUT",
            queryUrl : _queryUrl,
            headers: _headers,
            body : webhook
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
     * @param {int} webhookId    Required parameter: Example: 
     *
     * @return {promise<string>}
     */
    destroy : function(webhookId){

        //Create promise to return
        var _deffered= $q.defer();
        
        //validating required parameters
        var _missingArgs = false;
        if (webhookId == null || webhookId == undefined){
            _deffered.reject({errorMessage: "The parameter 'webhookId' is a required parameter and cannot be null.", errorCode: -1});
            _missingArgs = true;
        }

        if (_missingArgs)
            return deffered.promise

        //prepare query string for API call
        var _baseUri = Configuration.BASEURI
        var _queryBuilder = _baseUri + "/webhooks/{webhook_id}";
        
        //Process template parameters
        _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "webhook_id" : webhookId
        });

        //validate and preprocess url
        var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "X-API-TOKEN" : Configuration.xAPITOKEN,
            "X-API-EMAIL" : Configuration.xAPIEMAIL
        };

        //append custom auth authorization
        CustomAuthUtility.appendCustomAuthParams(_headers);

        //prepare and invoke the API call request to fetch the response
        var _config = {
            method : "DELETE",
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
     * Get a specific webhook by its id
     * @param {string} id    Required parameter: Example: 
     *
     * @return {promise<Webhook>}
     */
    get : function(id){

        //Create promise to return
        var _deffered= $q.defer();
        
        //validating required parameters
        var _missingArgs = false;
        if (id == null || id == undefined){
            _deffered.reject({errorMessage: "The parameter 'id' is a required parameter and cannot be null.", errorCode: -1});
            _missingArgs = true;
        }

        if (_missingArgs)
            return deffered.promise

        //prepare query string for API call
        var _baseUri = Configuration.BASEURI
        var _queryBuilder = _baseUri + "/webhooks/{id}";
        
        //Process template parameters
        _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "id" : id
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