# context method refer to  (https://support.huaweicloud.com/devg-functiongraph/functiongraph_02_0420.html)
# -*- coding:utf-8 -*-
import json
def handler (event, context):
    context_dict = {}
    context_dict['getRequestID'] = context.getRequestID()
    context_dict['remainingTimeInMilliSeconds'] = context.getRemainingTimeInMilliSeconds ()
    context_dict['ak'] = context.getAccessKey()
    context_dict['sk'] = context.getSecretKey() 
    context_dict['token'] = context.getToken() 
    context_dict['functionName'] = context.getFunctionName()
    context_dict['runningTimeInSeconds'] = context.getRunningTimeInSeconds()  
    context_dict['functionVersion'] = context.getVersion()
    context_dict['memorySize'] = context.getMemorySize()
    context_dict['cpuNumber'] = context.getCPUNumber()
    context_dict['projectId'] = context.getProjectID()
    context_dict['package'] = context.getPackage()
    context_dict['event'] = json.dumps(event)
    # Obtains values of the user-defined environment variables. The keys are configurable.
    #context_dict['envVaule']= context.getUserData('key') 
    logger = context.getLogger()
    logger.info('Hello, FunctionGraph')

    return context_dict
