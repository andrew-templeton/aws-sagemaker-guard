var fs=require('fs')
var _=require('lodash')

module.exports={    
    VolumeSize:{
        "Type":"String",
        "Default":"5"
    },
    CodeRepository:{
        "Type":"String",
        "Default":"EMPTY"
    },
    AcceleratorType:{
        "Type":"String",
        "Default":"EMPTY"
    },
    State:{
        "Type":"String",
        "Default":"ON"
    },
    LambdaUtilLayer:{
        "Type":"String"
    },
    OnStartStopDocument:{
        "Type":"String",
        "Default":"EMPTY"
    },
    OnCreateDeleteDocument:{
        "Type":"String",
        "Default":"EMPTY"
    },
    ParentStack:{
        "Type":"String"
    },
    SSMLogGroup:{
        "Type":"String"
    },
    LogsBucket:{
        "Type":"String"
    },
    "EFS":{
        "Type":"String"
    },
    "InstanceType":{
        "Type":"String"
    },
    "RoleArn":{
        "Type":"String"
    },
    "KmsKeyId":{
        "Type":"String",
        "Default":"EMPTY"
    },
    "SecurityGroupId":{
        "Type":"String",
    },
    "SubnetId":{
        "Type":"String",
    },
    "DirectInternetAccess":{
        "Type":"String",
        "Default":"Enabled"
    },
    "IdleShutdown":{
        "Type":"String",
        "Default":"30"
    },
    "GlueDevEndpoint":{
        "Type":"String",
        "Default":"EMPTY"
    },
    "VPC":{
        "Type":"String"
    }
}

