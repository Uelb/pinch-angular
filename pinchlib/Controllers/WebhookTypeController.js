/**
  *PinchLib
  *
  * This file was automatically generated for Pinch by APIMATIC v2.0 ( https://apimatic.io ) on 05/13/2016
  */

'use strict';
angular.module('PinchLib').factory('WebhookTypeController',function($q,Configuration,HttpClient,APIHelper){
    return{
        /**
         * List webhook types
         *
         * @return {promise<array>}
         */
        list : function(){

            //Create promise to return
            var _deffered= $q.defer();
            

            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/webhook_types";
            
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