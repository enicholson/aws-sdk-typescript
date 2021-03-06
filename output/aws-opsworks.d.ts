// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class OpsWorks {
      constructor(options?: any);
      assignInstance(params: OpsWorksAssignInstanceRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      assignVolume(params: OpsWorksAssignVolumeRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      associateElasticIp(params: OpsWorksAssociateElasticIpRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      attachElasticLoadBalancer(params: OpsWorksAttachElasticLoadBalancerRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      cloneStack(params: OpsWorksCloneStackRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: OpsWorksCloneStackResult|any) => void): void;
      createApp(params: OpsWorksCreateAppRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: OpsWorksCreateAppResult|any) => void): void;
      createDeployment(params: OpsWorksCreateDeploymentRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: OpsWorksCreateDeploymentResult|any) => void): void;
      createInstance(params: OpsWorksCreateInstanceRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: OpsWorksCreateInstanceResult|any) => void): void;
      createLayer(params: OpsWorksCreateLayerRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: OpsWorksCreateLayerResult|any) => void): void;
      createStack(params: OpsWorksCreateStackRequest, callback: (err: OpsWorksValidationException|any, data: OpsWorksCreateStackResult|any) => void): void;
      createUserProfile(params: OpsWorksCreateUserProfileRequest, callback: (err: OpsWorksValidationException|any, data: OpsWorksCreateUserProfileResult|any) => void): void;
      deleteApp(params: OpsWorksDeleteAppRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      deleteInstance(params: OpsWorksDeleteInstanceRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      deleteLayer(params: OpsWorksDeleteLayerRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      deleteStack(params: OpsWorksDeleteStackRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      deleteUserProfile(params: OpsWorksDeleteUserProfileRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      deregisterElasticIp(params: OpsWorksDeregisterElasticIpRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      deregisterInstance(params: OpsWorksDeregisterInstanceRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      deregisterRdsDbInstance(params: OpsWorksDeregisterRdsDbInstanceRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      deregisterVolume(params: OpsWorksDeregisterVolumeRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      describeApps(params: OpsWorksDescribeAppsRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: OpsWorksDescribeAppsResult|any) => void): void;
      describeCommands(params: OpsWorksDescribeCommandsRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: OpsWorksDescribeCommandsResult|any) => void): void;
      describeDeployments(params: OpsWorksDescribeDeploymentsRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: OpsWorksDescribeDeploymentsResult|any) => void): void;
      describeElasticIps(params: OpsWorksDescribeElasticIpsRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: OpsWorksDescribeElasticIpsResult|any) => void): void;
      describeElasticLoadBalancers(params: OpsWorksDescribeElasticLoadBalancersRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: OpsWorksDescribeElasticLoadBalancersResult|any) => void): void;
      describeInstances(params: OpsWorksDescribeInstancesRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: OpsWorksDescribeInstancesResult|any) => void): void;
      describeLayers(params: OpsWorksDescribeLayersRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: OpsWorksDescribeLayersResult|any) => void): void;
      describeLoadBasedAutoScaling(params: OpsWorksDescribeLoadBasedAutoScalingRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: OpsWorksDescribeLoadBasedAutoScalingResult|any) => void): void;
      describeMyUserProfile(callback: (err: any, data: OpsWorksDescribeMyUserProfileResult|any) => void): void;
      describePermissions(params: OpsWorksDescribePermissionsRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: OpsWorksDescribePermissionsResult|any) => void): void;
      describeRaidArrays(params: OpsWorksDescribeRaidArraysRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: OpsWorksDescribeRaidArraysResult|any) => void): void;
      describeRdsDbInstances(params: OpsWorksDescribeRdsDbInstancesRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: OpsWorksDescribeRdsDbInstancesResult|any) => void): void;
      describeServiceErrors(params: OpsWorksDescribeServiceErrorsRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: OpsWorksDescribeServiceErrorsResult|any) => void): void;
      describeStackProvisioningParameters(params: OpsWorksDescribeStackProvisioningParametersRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: OpsWorksDescribeStackProvisioningParametersResult|any) => void): void;
      describeStackSummary(params: OpsWorksDescribeStackSummaryRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: OpsWorksDescribeStackSummaryResult|any) => void): void;
      describeStacks(params: OpsWorksDescribeStacksRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: OpsWorksDescribeStacksResult|any) => void): void;
      describeTimeBasedAutoScaling(params: OpsWorksDescribeTimeBasedAutoScalingRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: OpsWorksDescribeTimeBasedAutoScalingResult|any) => void): void;
      describeUserProfiles(params: OpsWorksDescribeUserProfilesRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: OpsWorksDescribeUserProfilesResult|any) => void): void;
      describeVolumes(params: OpsWorksDescribeVolumesRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: OpsWorksDescribeVolumesResult|any) => void): void;
      detachElasticLoadBalancer(params: OpsWorksDetachElasticLoadBalancerRequest, callback: (err: OpsWorksResourceNotFoundException|any, data: any) => void): void;
      disassociateElasticIp(params: OpsWorksDisassociateElasticIpRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      getHostnameSuggestion(params: OpsWorksGetHostnameSuggestionRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: OpsWorksGetHostnameSuggestionResult|any) => void): void;
      grantAccess(params: OpsWorksGrantAccessRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: OpsWorksGrantAccessResult|any) => void): void;
      rebootInstance(params: OpsWorksRebootInstanceRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      registerElasticIp(params: OpsWorksRegisterElasticIpRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: OpsWorksRegisterElasticIpResult|any) => void): void;
      registerInstance(params: OpsWorksRegisterInstanceRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: OpsWorksRegisterInstanceResult|any) => void): void;
      registerRdsDbInstance(params: OpsWorksRegisterRdsDbInstanceRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      registerVolume(params: OpsWorksRegisterVolumeRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: OpsWorksRegisterVolumeResult|any) => void): void;
      setLoadBasedAutoScaling(params: OpsWorksSetLoadBasedAutoScalingRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      setPermission(params: OpsWorksSetPermissionRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      setTimeBasedAutoScaling(params: OpsWorksSetTimeBasedAutoScalingRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      startInstance(params: OpsWorksStartInstanceRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      startStack(params: OpsWorksStartStackRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      stopInstance(params: OpsWorksStopInstanceRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      stopStack(params: OpsWorksStopStackRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      unassignInstance(params: OpsWorksUnassignInstanceRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      unassignVolume(params: OpsWorksUnassignVolumeRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      updateApp(params: OpsWorksUpdateAppRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      updateElasticIp(params: OpsWorksUpdateElasticIpRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      updateInstance(params: OpsWorksUpdateInstanceRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      updateLayer(params: OpsWorksUpdateLayerRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      updateMyUserProfile(params: OpsWorksUpdateMyUserProfileRequest, callback: (err: OpsWorksValidationException|any, data: any) => void): void;
      updateRdsDbInstance(params: OpsWorksUpdateRdsDbInstanceRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      updateStack(params: OpsWorksUpdateStackRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      updateUserProfile(params: OpsWorksUpdateUserProfileRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
      updateVolume(params: OpsWorksUpdateVolumeRequest, callback: (err: OpsWorksValidationException|OpsWorksResourceNotFoundException|any, data: any) => void): void;
    }

    export interface OpsWorksApp {
        AppId?: OpsWorksString;
        StackId?: OpsWorksString;
        Shortname?: OpsWorksString;
        Name?: OpsWorksString;
        Description?: OpsWorksString;
        DataSources?: OpsWorksDataSources;
        Type?: OpsWorksAppType;
        AppSource?: OpsWorksSource;
        Domains?: OpsWorksStrings;
        EnableSsl?: OpsWorksBoolean;
        SslConfiguration?: OpsWorksSslConfiguration;
        Attributes?: OpsWorksAppAttributes;
        CreatedAt?: OpsWorksString;
        Environment?: OpsWorksEnvironmentVariables;
    }

    export type OpsWorksAppAttributes = any; // not really - it was 'map' instead - must fix this one
    export type OpsWorksAppAttributesKeys = string;
    export type OpsWorksAppType = string;
    export type OpsWorksApps = Array<OpsWorksApp>;
    export type OpsWorksArchitecture = string;
    export interface OpsWorksAssignInstanceRequest {
        InstanceId: OpsWorksString;
        LayerIds: OpsWorksStrings;
    }

    export interface OpsWorksAssignVolumeRequest {
        VolumeId: OpsWorksString;
        InstanceId?: OpsWorksString;
    }

    export interface OpsWorksAssociateElasticIpRequest {
        ElasticIp: OpsWorksString;
        InstanceId?: OpsWorksString;
    }

    export interface OpsWorksAttachElasticLoadBalancerRequest {
        ElasticLoadBalancerName: OpsWorksString;
        LayerId: OpsWorksString;
    }

    export interface OpsWorksAutoScalingThresholds {
        InstanceCount?: OpsWorksInteger;
        ThresholdsWaitTime?: OpsWorksMinute;
        IgnoreMetricsTime?: OpsWorksMinute;
        CpuThreshold?: OpsWorksDouble;
        MemoryThreshold?: OpsWorksDouble;
        LoadThreshold?: OpsWorksDouble;
        Alarms?: OpsWorksStrings;
    }

    export type OpsWorksAutoScalingType = string;
    export interface OpsWorksBlockDeviceMapping {
        DeviceName?: OpsWorksString;
        NoDevice?: OpsWorksString;
        VirtualName?: OpsWorksString;
        Ebs?: OpsWorksEbsBlockDevice;
    }

    export type OpsWorksBlockDeviceMappings = Array<OpsWorksBlockDeviceMapping>;
    export type OpsWorksBoolean = boolean;
    export interface OpsWorksChefConfiguration {
        ManageBerkshelf?: OpsWorksBoolean;
        BerkshelfVersion?: OpsWorksString;
    }

    export interface OpsWorksCloneStackRequest {
        SourceStackId: OpsWorksString;
        Name?: OpsWorksString;
        Region?: OpsWorksString;
        VpcId?: OpsWorksString;
        Attributes?: OpsWorksStackAttributes;
        ServiceRoleArn: OpsWorksString;
        DefaultInstanceProfileArn?: OpsWorksString;
        DefaultOs?: OpsWorksString;
        HostnameTheme?: OpsWorksString;
        DefaultAvailabilityZone?: OpsWorksString;
        DefaultSubnetId?: OpsWorksString;
        CustomJson?: OpsWorksString;
        ConfigurationManager?: OpsWorksStackConfigurationManager;
        ChefConfiguration?: OpsWorksChefConfiguration;
        UseCustomCookbooks?: OpsWorksBoolean;
        UseOpsworksSecurityGroups?: OpsWorksBoolean;
        CustomCookbooksSource?: OpsWorksSource;
        DefaultSshKeyName?: OpsWorksString;
        ClonePermissions?: OpsWorksBoolean;
        CloneAppIds?: OpsWorksStrings;
        DefaultRootDeviceType?: OpsWorksRootDeviceType;
    }

    export interface OpsWorksCloneStackResult {
        StackId?: OpsWorksString;
    }

    export interface OpsWorksCommand {
        CommandId?: OpsWorksString;
        InstanceId?: OpsWorksString;
        DeploymentId?: OpsWorksString;
        CreatedAt?: OpsWorksDateTime;
        AcknowledgedAt?: OpsWorksDateTime;
        CompletedAt?: OpsWorksDateTime;
        Status?: OpsWorksString;
        ExitCode?: OpsWorksInteger;
        LogUrl?: OpsWorksString;
        Type?: OpsWorksString;
    }

    export type OpsWorksCommands = Array<OpsWorksCommand>;
    export interface OpsWorksCreateAppRequest {
        StackId: OpsWorksString;
        Shortname?: OpsWorksString;
        Name: OpsWorksString;
        Description?: OpsWorksString;
        DataSources?: OpsWorksDataSources;
        Type: OpsWorksAppType;
        AppSource?: OpsWorksSource;
        Domains?: OpsWorksStrings;
        EnableSsl?: OpsWorksBoolean;
        SslConfiguration?: OpsWorksSslConfiguration;
        Attributes?: OpsWorksAppAttributes;
        Environment?: OpsWorksEnvironmentVariables;
    }

    export interface OpsWorksCreateAppResult {
        AppId?: OpsWorksString;
    }

    export interface OpsWorksCreateDeploymentRequest {
        StackId: OpsWorksString;
        AppId?: OpsWorksString;
        InstanceIds?: OpsWorksStrings;
        Command: OpsWorksDeploymentCommand;
        Comment?: OpsWorksString;
        CustomJson?: OpsWorksString;
    }

    export interface OpsWorksCreateDeploymentResult {
        DeploymentId?: OpsWorksString;
    }

    export interface OpsWorksCreateInstanceRequest {
        StackId: OpsWorksString;
        LayerIds: OpsWorksStrings;
        InstanceType: OpsWorksString;
        AutoScalingType?: OpsWorksAutoScalingType;
        Hostname?: OpsWorksString;
        Os?: OpsWorksString;
        AmiId?: OpsWorksString;
        SshKeyName?: OpsWorksString;
        AvailabilityZone?: OpsWorksString;
        VirtualizationType?: OpsWorksString;
        SubnetId?: OpsWorksString;
        Architecture?: OpsWorksArchitecture;
        RootDeviceType?: OpsWorksRootDeviceType;
        BlockDeviceMappings?: OpsWorksBlockDeviceMappings;
        InstallUpdatesOnBoot?: OpsWorksBoolean;
        EbsOptimized?: OpsWorksBoolean;
    }

    export interface OpsWorksCreateInstanceResult {
        InstanceId?: OpsWorksString;
    }

    export interface OpsWorksCreateLayerRequest {
        StackId: OpsWorksString;
        Type: OpsWorksLayerType;
        Name: OpsWorksString;
        Shortname: OpsWorksString;
        Attributes?: OpsWorksLayerAttributes;
        CustomInstanceProfileArn?: OpsWorksString;
        CustomSecurityGroupIds?: OpsWorksStrings;
        Packages?: OpsWorksStrings;
        VolumeConfigurations?: OpsWorksVolumeConfigurations;
        EnableAutoHealing?: OpsWorksBoolean;
        AutoAssignElasticIps?: OpsWorksBoolean;
        AutoAssignPublicIps?: OpsWorksBoolean;
        CustomRecipes?: OpsWorksRecipes;
        InstallUpdatesOnBoot?: OpsWorksBoolean;
        UseEbsOptimizedInstances?: OpsWorksBoolean;
        LifecycleEventConfiguration?: OpsWorksLifecycleEventConfiguration;
    }

    export interface OpsWorksCreateLayerResult {
        LayerId?: OpsWorksString;
    }

    export interface OpsWorksCreateStackRequest {
        Name: OpsWorksString;
        Region: OpsWorksString;
        VpcId?: OpsWorksString;
        Attributes?: OpsWorksStackAttributes;
        ServiceRoleArn: OpsWorksString;
        DefaultInstanceProfileArn: OpsWorksString;
        DefaultOs?: OpsWorksString;
        HostnameTheme?: OpsWorksString;
        DefaultAvailabilityZone?: OpsWorksString;
        DefaultSubnetId?: OpsWorksString;
        CustomJson?: OpsWorksString;
        ConfigurationManager?: OpsWorksStackConfigurationManager;
        ChefConfiguration?: OpsWorksChefConfiguration;
        UseCustomCookbooks?: OpsWorksBoolean;
        UseOpsworksSecurityGroups?: OpsWorksBoolean;
        CustomCookbooksSource?: OpsWorksSource;
        DefaultSshKeyName?: OpsWorksString;
        DefaultRootDeviceType?: OpsWorksRootDeviceType;
    }

    export interface OpsWorksCreateStackResult {
        StackId?: OpsWorksString;
    }

    export interface OpsWorksCreateUserProfileRequest {
        IamUserArn: OpsWorksString;
        SshUsername?: OpsWorksString;
        SshPublicKey?: OpsWorksString;
        AllowSelfManagement?: OpsWorksBoolean;
    }

    export interface OpsWorksCreateUserProfileResult {
        IamUserArn?: OpsWorksString;
    }

    export type OpsWorksDailyAutoScalingSchedule = any; // not really - it was 'map' instead - must fix this one
    export interface OpsWorksDataSource {
        Type?: OpsWorksString;
        Arn?: OpsWorksString;
        DatabaseName?: OpsWorksString;
    }

    export type OpsWorksDataSources = Array<OpsWorksDataSource>;
    export type OpsWorksDateTime = string;
    export interface OpsWorksDeleteAppRequest {
        AppId: OpsWorksString;
    }

    export interface OpsWorksDeleteInstanceRequest {
        InstanceId: OpsWorksString;
        DeleteElasticIp?: OpsWorksBoolean;
        DeleteVolumes?: OpsWorksBoolean;
    }

    export interface OpsWorksDeleteLayerRequest {
        LayerId: OpsWorksString;
    }

    export interface OpsWorksDeleteStackRequest {
        StackId: OpsWorksString;
    }

    export interface OpsWorksDeleteUserProfileRequest {
        IamUserArn: OpsWorksString;
    }

    export interface OpsWorksDeployment {
        DeploymentId?: OpsWorksString;
        StackId?: OpsWorksString;
        AppId?: OpsWorksString;
        CreatedAt?: OpsWorksDateTime;
        CompletedAt?: OpsWorksDateTime;
        Duration?: OpsWorksInteger;
        IamUserArn?: OpsWorksString;
        Comment?: OpsWorksString;
        Command?: OpsWorksDeploymentCommand;
        Status?: OpsWorksString;
        CustomJson?: OpsWorksString;
        InstanceIds?: OpsWorksStrings;
    }

    export interface OpsWorksDeploymentCommand {
        Name: OpsWorksDeploymentCommandName;
        Args?: OpsWorksDeploymentCommandArgs;
    }

    export type OpsWorksDeploymentCommandArgs = any; // not really - it was 'map' instead - must fix this one
    export type OpsWorksDeploymentCommandName = string;
    export type OpsWorksDeployments = Array<OpsWorksDeployment>;
    export interface OpsWorksDeregisterElasticIpRequest {
        ElasticIp: OpsWorksString;
    }

    export interface OpsWorksDeregisterInstanceRequest {
        InstanceId: OpsWorksString;
    }

    export interface OpsWorksDeregisterRdsDbInstanceRequest {
        RdsDbInstanceArn: OpsWorksString;
    }

    export interface OpsWorksDeregisterVolumeRequest {
        VolumeId: OpsWorksString;
    }

    export interface OpsWorksDescribeAppsRequest {
        StackId?: OpsWorksString;
        AppIds?: OpsWorksStrings;
    }

    export interface OpsWorksDescribeAppsResult {
        Apps?: OpsWorksApps;
    }

    export interface OpsWorksDescribeCommandsRequest {
        DeploymentId?: OpsWorksString;
        InstanceId?: OpsWorksString;
        CommandIds?: OpsWorksStrings;
    }

    export interface OpsWorksDescribeCommandsResult {
        Commands?: OpsWorksCommands;
    }

    export interface OpsWorksDescribeDeploymentsRequest {
        StackId?: OpsWorksString;
        AppId?: OpsWorksString;
        DeploymentIds?: OpsWorksStrings;
    }

    export interface OpsWorksDescribeDeploymentsResult {
        Deployments?: OpsWorksDeployments;
    }

    export interface OpsWorksDescribeElasticIpsRequest {
        InstanceId?: OpsWorksString;
        StackId?: OpsWorksString;
        Ips?: OpsWorksStrings;
    }

    export interface OpsWorksDescribeElasticIpsResult {
        ElasticIps?: OpsWorksElasticIps;
    }

    export interface OpsWorksDescribeElasticLoadBalancersRequest {
        StackId?: OpsWorksString;
        LayerIds?: OpsWorksStrings;
    }

    export interface OpsWorksDescribeElasticLoadBalancersResult {
        ElasticLoadBalancers?: OpsWorksElasticLoadBalancers;
    }

    export interface OpsWorksDescribeInstancesRequest {
        StackId?: OpsWorksString;
        LayerId?: OpsWorksString;
        InstanceIds?: OpsWorksStrings;
    }

    export interface OpsWorksDescribeInstancesResult {
        Instances?: OpsWorksInstances;
    }

    export interface OpsWorksDescribeLayersRequest {
        StackId?: OpsWorksString;
        LayerIds?: OpsWorksStrings;
    }

    export interface OpsWorksDescribeLayersResult {
        Layers?: OpsWorksLayers;
    }

    export interface OpsWorksDescribeLoadBasedAutoScalingRequest {
        LayerIds: OpsWorksStrings;
    }

    export interface OpsWorksDescribeLoadBasedAutoScalingResult {
        LoadBasedAutoScalingConfigurations?: OpsWorksLoadBasedAutoScalingConfigurations;
    }

    export interface OpsWorksDescribeMyUserProfileResult {
        UserProfile?: OpsWorksSelfUserProfile;
    }

    export interface OpsWorksDescribePermissionsRequest {
        IamUserArn?: OpsWorksString;
        StackId?: OpsWorksString;
    }

    export interface OpsWorksDescribePermissionsResult {
        Permissions?: OpsWorksPermissions;
    }

    export interface OpsWorksDescribeRaidArraysRequest {
        InstanceId?: OpsWorksString;
        StackId?: OpsWorksString;
        RaidArrayIds?: OpsWorksStrings;
    }

    export interface OpsWorksDescribeRaidArraysResult {
        RaidArrays?: OpsWorksRaidArrays;
    }

    export interface OpsWorksDescribeRdsDbInstancesRequest {
        StackId: OpsWorksString;
        RdsDbInstanceArns?: OpsWorksStrings;
    }

    export interface OpsWorksDescribeRdsDbInstancesResult {
        RdsDbInstances?: OpsWorksRdsDbInstances;
    }

    export interface OpsWorksDescribeServiceErrorsRequest {
        StackId?: OpsWorksString;
        InstanceId?: OpsWorksString;
        ServiceErrorIds?: OpsWorksStrings;
    }

    export interface OpsWorksDescribeServiceErrorsResult {
        ServiceErrors?: OpsWorksServiceErrors;
    }

    export interface OpsWorksDescribeStackProvisioningParametersRequest {
        StackId: OpsWorksString;
    }

    export interface OpsWorksDescribeStackProvisioningParametersResult {
        AgentInstallerUrl?: OpsWorksString;
        Parameters?: OpsWorksParameters;
    }

    export interface OpsWorksDescribeStackSummaryRequest {
        StackId: OpsWorksString;
    }

    export interface OpsWorksDescribeStackSummaryResult {
        StackSummary?: OpsWorksStackSummary;
    }

    export interface OpsWorksDescribeStacksRequest {
        StackIds?: OpsWorksStrings;
    }

    export interface OpsWorksDescribeStacksResult {
        Stacks?: OpsWorksStacks;
    }

    export interface OpsWorksDescribeTimeBasedAutoScalingRequest {
        InstanceIds: OpsWorksStrings;
    }

    export interface OpsWorksDescribeTimeBasedAutoScalingResult {
        TimeBasedAutoScalingConfigurations?: OpsWorksTimeBasedAutoScalingConfigurations;
    }

    export interface OpsWorksDescribeUserProfilesRequest {
        IamUserArns?: OpsWorksStrings;
    }

    export interface OpsWorksDescribeUserProfilesResult {
        UserProfiles?: OpsWorksUserProfiles;
    }

    export interface OpsWorksDescribeVolumesRequest {
        InstanceId?: OpsWorksString;
        StackId?: OpsWorksString;
        RaidArrayId?: OpsWorksString;
        VolumeIds?: OpsWorksStrings;
    }

    export interface OpsWorksDescribeVolumesResult {
        Volumes?: OpsWorksVolumes;
    }

    export interface OpsWorksDetachElasticLoadBalancerRequest {
        ElasticLoadBalancerName: OpsWorksString;
        LayerId: OpsWorksString;
    }

    export interface OpsWorksDisassociateElasticIpRequest {
        ElasticIp: OpsWorksString;
    }

    export type OpsWorksDouble = number;
    export interface OpsWorksEbsBlockDevice {
        SnapshotId?: OpsWorksString;
        Iops?: OpsWorksInteger;
        VolumeSize?: OpsWorksInteger;
        VolumeType?: OpsWorksVolumeType;
        DeleteOnTermination?: OpsWorksBoolean;
    }

    export interface OpsWorksElasticIp {
        Ip?: OpsWorksString;
        Name?: OpsWorksString;
        Domain?: OpsWorksString;
        Region?: OpsWorksString;
        InstanceId?: OpsWorksString;
    }

    export type OpsWorksElasticIps = Array<OpsWorksElasticIp>;
    export interface OpsWorksElasticLoadBalancer {
        ElasticLoadBalancerName?: OpsWorksString;
        Region?: OpsWorksString;
        DnsName?: OpsWorksString;
        StackId?: OpsWorksString;
        LayerId?: OpsWorksString;
        VpcId?: OpsWorksString;
        AvailabilityZones?: OpsWorksStrings;
        SubnetIds?: OpsWorksStrings;
        Ec2InstanceIds?: OpsWorksStrings;
    }

    export type OpsWorksElasticLoadBalancers = Array<OpsWorksElasticLoadBalancer>;
    export interface OpsWorksEnvironmentVariable {
        Key: OpsWorksString;
        Value: OpsWorksString;
        Secure?: OpsWorksBoolean;
    }

    export type OpsWorksEnvironmentVariables = Array<OpsWorksEnvironmentVariable>;
    export interface OpsWorksGetHostnameSuggestionRequest {
        LayerId: OpsWorksString;
    }

    export interface OpsWorksGetHostnameSuggestionResult {
        LayerId?: OpsWorksString;
        Hostname?: OpsWorksString;
    }

    export interface OpsWorksGrantAccessRequest {
        InstanceId: OpsWorksString;
        ValidForInMinutes?: OpsWorksValidForInMinutes;
    }

    export interface OpsWorksGrantAccessResult {
        TemporaryCredential?: OpsWorksTemporaryCredential;
    }

    export type OpsWorksHour = string;
    export interface OpsWorksInstance {
        InstanceId?: OpsWorksString;
        Ec2InstanceId?: OpsWorksString;
        VirtualizationType?: OpsWorksVirtualizationType;
        Hostname?: OpsWorksString;
        StackId?: OpsWorksString;
        LayerIds?: OpsWorksStrings;
        SecurityGroupIds?: OpsWorksStrings;
        InstanceType?: OpsWorksString;
        InstanceProfileArn?: OpsWorksString;
        Status?: OpsWorksString;
        Os?: OpsWorksString;
        AmiId?: OpsWorksString;
        AvailabilityZone?: OpsWorksString;
        SubnetId?: OpsWorksString;
        PublicDns?: OpsWorksString;
        PrivateDns?: OpsWorksString;
        PublicIp?: OpsWorksString;
        PrivateIp?: OpsWorksString;
        ElasticIp?: OpsWorksString;
        AutoScalingType?: OpsWorksAutoScalingType;
        SshKeyName?: OpsWorksString;
        SshHostRsaKeyFingerprint?: OpsWorksString;
        SshHostDsaKeyFingerprint?: OpsWorksString;
        CreatedAt?: OpsWorksDateTime;
        LastServiceErrorId?: OpsWorksString;
        Architecture?: OpsWorksArchitecture;
        RootDeviceType?: OpsWorksRootDeviceType;
        RootDeviceVolumeId?: OpsWorksString;
        BlockDeviceMappings?: OpsWorksBlockDeviceMappings;
        InstallUpdatesOnBoot?: OpsWorksBoolean;
        EbsOptimized?: OpsWorksBoolean;
        ReportedAgentVersion?: OpsWorksString;
        ReportedOs?: OpsWorksReportedOs;
        InfrastructureClass?: OpsWorksString;
        RegisteredBy?: OpsWorksString;
    }

    export interface OpsWorksInstanceIdentity {
        Document?: OpsWorksString;
        Signature?: OpsWorksString;
    }

    export type OpsWorksInstances = Array<OpsWorksInstance>;
    export interface OpsWorksInstancesCount {
        Assigning?: OpsWorksInteger;
        Booting?: OpsWorksInteger;
        ConnectionLost?: OpsWorksInteger;
        Deregistering?: OpsWorksInteger;
        Online?: OpsWorksInteger;
        Pending?: OpsWorksInteger;
        Rebooting?: OpsWorksInteger;
        Registered?: OpsWorksInteger;
        Registering?: OpsWorksInteger;
        Requested?: OpsWorksInteger;
        RunningSetup?: OpsWorksInteger;
        SetupFailed?: OpsWorksInteger;
        ShuttingDown?: OpsWorksInteger;
        StartFailed?: OpsWorksInteger;
        Stopped?: OpsWorksInteger;
        Stopping?: OpsWorksInteger;
        Terminated?: OpsWorksInteger;
        Terminating?: OpsWorksInteger;
        Unassigning?: OpsWorksInteger;
    }

    export type OpsWorksInteger = number;
    export interface OpsWorksLayer {
        StackId?: OpsWorksString;
        LayerId?: OpsWorksString;
        Type?: OpsWorksLayerType;
        Name?: OpsWorksString;
        Shortname?: OpsWorksString;
        Attributes?: OpsWorksLayerAttributes;
        CustomInstanceProfileArn?: OpsWorksString;
        CustomSecurityGroupIds?: OpsWorksStrings;
        DefaultSecurityGroupNames?: OpsWorksStrings;
        Packages?: OpsWorksStrings;
        VolumeConfigurations?: OpsWorksVolumeConfigurations;
        EnableAutoHealing?: OpsWorksBoolean;
        AutoAssignElasticIps?: OpsWorksBoolean;
        AutoAssignPublicIps?: OpsWorksBoolean;
        DefaultRecipes?: OpsWorksRecipes;
        CustomRecipes?: OpsWorksRecipes;
        CreatedAt?: OpsWorksDateTime;
        InstallUpdatesOnBoot?: OpsWorksBoolean;
        UseEbsOptimizedInstances?: OpsWorksBoolean;
        LifecycleEventConfiguration?: OpsWorksLifecycleEventConfiguration;
    }

    export type OpsWorksLayerAttributes = any; // not really - it was 'map' instead - must fix this one
    export type OpsWorksLayerAttributesKeys = string;
    export type OpsWorksLayerType = string;
    export type OpsWorksLayers = Array<OpsWorksLayer>;
    export interface OpsWorksLifecycleEventConfiguration {
        Shutdown?: OpsWorksShutdownEventConfiguration;
    }

    export interface OpsWorksLoadBasedAutoScalingConfiguration {
        LayerId?: OpsWorksString;
        Enable?: OpsWorksBoolean;
        UpScaling?: OpsWorksAutoScalingThresholds;
        DownScaling?: OpsWorksAutoScalingThresholds;
    }

    export type OpsWorksLoadBasedAutoScalingConfigurations = Array<OpsWorksLoadBasedAutoScalingConfiguration>;
    export type OpsWorksMinute = number;
    export type OpsWorksParameters = any; // not really - it was 'map' instead - must fix this one
    export interface OpsWorksPermission {
        StackId?: OpsWorksString;
        IamUserArn?: OpsWorksString;
        AllowSsh?: OpsWorksBoolean;
        AllowSudo?: OpsWorksBoolean;
        Level?: OpsWorksString;
    }

    export type OpsWorksPermissions = Array<OpsWorksPermission>;
    export interface OpsWorksRaidArray {
        RaidArrayId?: OpsWorksString;
        InstanceId?: OpsWorksString;
        Name?: OpsWorksString;
        RaidLevel?: OpsWorksInteger;
        NumberOfDisks?: OpsWorksInteger;
        Size?: OpsWorksInteger;
        Device?: OpsWorksString;
        MountPoint?: OpsWorksString;
        AvailabilityZone?: OpsWorksString;
        CreatedAt?: OpsWorksDateTime;
        StackId?: OpsWorksString;
        VolumeType?: OpsWorksString;
        Iops?: OpsWorksInteger;
    }

    export type OpsWorksRaidArrays = Array<OpsWorksRaidArray>;
    export interface OpsWorksRdsDbInstance {
        RdsDbInstanceArn?: OpsWorksString;
        DbInstanceIdentifier?: OpsWorksString;
        DbUser?: OpsWorksString;
        DbPassword?: OpsWorksString;
        Region?: OpsWorksString;
        Address?: OpsWorksString;
        Engine?: OpsWorksString;
        StackId?: OpsWorksString;
        MissingOnRds?: OpsWorksBoolean;
    }

    export type OpsWorksRdsDbInstances = Array<OpsWorksRdsDbInstance>;
    export interface OpsWorksRebootInstanceRequest {
        InstanceId: OpsWorksString;
    }

    export interface OpsWorksRecipes {
        Setup?: OpsWorksStrings;
        Configure?: OpsWorksStrings;
        Deploy?: OpsWorksStrings;
        Undeploy?: OpsWorksStrings;
        Shutdown?: OpsWorksStrings;
    }

    export interface OpsWorksRegisterElasticIpRequest {
        ElasticIp: OpsWorksString;
        StackId: OpsWorksString;
    }

    export interface OpsWorksRegisterElasticIpResult {
        ElasticIp?: OpsWorksString;
    }

    export interface OpsWorksRegisterInstanceRequest {
        StackId: OpsWorksString;
        Hostname?: OpsWorksString;
        PublicIp?: OpsWorksString;
        PrivateIp?: OpsWorksString;
        RsaPublicKey?: OpsWorksString;
        RsaPublicKeyFingerprint?: OpsWorksString;
        InstanceIdentity?: OpsWorksInstanceIdentity;
    }

    export interface OpsWorksRegisterInstanceResult {
        InstanceId?: OpsWorksString;
    }

    export interface OpsWorksRegisterRdsDbInstanceRequest {
        StackId: OpsWorksString;
        RdsDbInstanceArn: OpsWorksString;
        DbUser: OpsWorksString;
        DbPassword: OpsWorksString;
    }

    export interface OpsWorksRegisterVolumeRequest {
        Ec2VolumeId?: OpsWorksString;
        StackId: OpsWorksString;
    }

    export interface OpsWorksRegisterVolumeResult {
        VolumeId?: OpsWorksString;
    }

    export interface OpsWorksReportedOs {
        Family?: OpsWorksString;
        Name?: OpsWorksString;
        Version?: OpsWorksString;
    }

    export interface OpsWorksResourceNotFoundException {
        message?: OpsWorksString;
    }

    export type OpsWorksRootDeviceType = string;
    export interface OpsWorksSelfUserProfile {
        IamUserArn?: OpsWorksString;
        Name?: OpsWorksString;
        SshUsername?: OpsWorksString;
        SshPublicKey?: OpsWorksString;
    }

    export interface OpsWorksServiceError {
        ServiceErrorId?: OpsWorksString;
        StackId?: OpsWorksString;
        InstanceId?: OpsWorksString;
        Type?: OpsWorksString;
        Message?: OpsWorksString;
        CreatedAt?: OpsWorksDateTime;
    }

    export type OpsWorksServiceErrors = Array<OpsWorksServiceError>;
    export interface OpsWorksSetLoadBasedAutoScalingRequest {
        LayerId: OpsWorksString;
        Enable?: OpsWorksBoolean;
        UpScaling?: OpsWorksAutoScalingThresholds;
        DownScaling?: OpsWorksAutoScalingThresholds;
    }

    export interface OpsWorksSetPermissionRequest {
        StackId: OpsWorksString;
        IamUserArn: OpsWorksString;
        AllowSsh?: OpsWorksBoolean;
        AllowSudo?: OpsWorksBoolean;
        Level?: OpsWorksString;
    }

    export interface OpsWorksSetTimeBasedAutoScalingRequest {
        InstanceId: OpsWorksString;
        AutoScalingSchedule?: OpsWorksWeeklyAutoScalingSchedule;
    }

    export interface OpsWorksShutdownEventConfiguration {
        ExecutionTimeout?: OpsWorksInteger;
        DelayUntilElbConnectionsDrained?: OpsWorksBoolean;
    }

    export interface OpsWorksSource {
        Type?: OpsWorksSourceType;
        Url?: OpsWorksString;
        Username?: OpsWorksString;
        Password?: OpsWorksString;
        SshKey?: OpsWorksString;
        Revision?: OpsWorksString;
    }

    export type OpsWorksSourceType = string;
    export interface OpsWorksSslConfiguration {
        Certificate: OpsWorksString;
        PrivateKey: OpsWorksString;
        Chain?: OpsWorksString;
    }

    export interface OpsWorksStack {
        StackId?: OpsWorksString;
        Name?: OpsWorksString;
        Arn?: OpsWorksString;
        Region?: OpsWorksString;
        VpcId?: OpsWorksString;
        Attributes?: OpsWorksStackAttributes;
        ServiceRoleArn?: OpsWorksString;
        DefaultInstanceProfileArn?: OpsWorksString;
        DefaultOs?: OpsWorksString;
        HostnameTheme?: OpsWorksString;
        DefaultAvailabilityZone?: OpsWorksString;
        DefaultSubnetId?: OpsWorksString;
        CustomJson?: OpsWorksString;
        ConfigurationManager?: OpsWorksStackConfigurationManager;
        ChefConfiguration?: OpsWorksChefConfiguration;
        UseCustomCookbooks?: OpsWorksBoolean;
        UseOpsworksSecurityGroups?: OpsWorksBoolean;
        CustomCookbooksSource?: OpsWorksSource;
        DefaultSshKeyName?: OpsWorksString;
        CreatedAt?: OpsWorksDateTime;
        DefaultRootDeviceType?: OpsWorksRootDeviceType;
    }

    export type OpsWorksStackAttributes = any; // not really - it was 'map' instead - must fix this one
    export type OpsWorksStackAttributesKeys = string;
    export interface OpsWorksStackConfigurationManager {
        Name?: OpsWorksString;
        Version?: OpsWorksString;
    }

    export interface OpsWorksStackSummary {
        StackId?: OpsWorksString;
        Name?: OpsWorksString;
        Arn?: OpsWorksString;
        LayersCount?: OpsWorksInteger;
        AppsCount?: OpsWorksInteger;
        InstancesCount?: OpsWorksInstancesCount;
    }

    export type OpsWorksStacks = Array<OpsWorksStack>;
    export interface OpsWorksStartInstanceRequest {
        InstanceId: OpsWorksString;
    }

    export interface OpsWorksStartStackRequest {
        StackId: OpsWorksString;
    }

    export interface OpsWorksStopInstanceRequest {
        InstanceId: OpsWorksString;
    }

    export interface OpsWorksStopStackRequest {
        StackId: OpsWorksString;
    }

    export type OpsWorksString = string;
    export type OpsWorksStrings = Array<OpsWorksString>;
    export type OpsWorksSwitch = string;
    export interface OpsWorksTemporaryCredential {
        Username?: OpsWorksString;
        Password?: OpsWorksString;
        ValidForInMinutes?: OpsWorksInteger;
        InstanceId?: OpsWorksString;
    }

    export interface OpsWorksTimeBasedAutoScalingConfiguration {
        InstanceId?: OpsWorksString;
        AutoScalingSchedule?: OpsWorksWeeklyAutoScalingSchedule;
    }

    export type OpsWorksTimeBasedAutoScalingConfigurations = Array<OpsWorksTimeBasedAutoScalingConfiguration>;
    export interface OpsWorksUnassignInstanceRequest {
        InstanceId: OpsWorksString;
    }

    export interface OpsWorksUnassignVolumeRequest {
        VolumeId: OpsWorksString;
    }

    export interface OpsWorksUpdateAppRequest {
        AppId: OpsWorksString;
        Name?: OpsWorksString;
        Description?: OpsWorksString;
        DataSources?: OpsWorksDataSources;
        Type?: OpsWorksAppType;
        AppSource?: OpsWorksSource;
        Domains?: OpsWorksStrings;
        EnableSsl?: OpsWorksBoolean;
        SslConfiguration?: OpsWorksSslConfiguration;
        Attributes?: OpsWorksAppAttributes;
        Environment?: OpsWorksEnvironmentVariables;
    }

    export interface OpsWorksUpdateElasticIpRequest {
        ElasticIp: OpsWorksString;
        Name?: OpsWorksString;
    }

    export interface OpsWorksUpdateInstanceRequest {
        InstanceId: OpsWorksString;
        LayerIds?: OpsWorksStrings;
        InstanceType?: OpsWorksString;
        AutoScalingType?: OpsWorksAutoScalingType;
        Hostname?: OpsWorksString;
        Os?: OpsWorksString;
        AmiId?: OpsWorksString;
        SshKeyName?: OpsWorksString;
        Architecture?: OpsWorksArchitecture;
        InstallUpdatesOnBoot?: OpsWorksBoolean;
        EbsOptimized?: OpsWorksBoolean;
    }

    export interface OpsWorksUpdateLayerRequest {
        LayerId: OpsWorksString;
        Name?: OpsWorksString;
        Shortname?: OpsWorksString;
        Attributes?: OpsWorksLayerAttributes;
        CustomInstanceProfileArn?: OpsWorksString;
        CustomSecurityGroupIds?: OpsWorksStrings;
        Packages?: OpsWorksStrings;
        VolumeConfigurations?: OpsWorksVolumeConfigurations;
        EnableAutoHealing?: OpsWorksBoolean;
        AutoAssignElasticIps?: OpsWorksBoolean;
        AutoAssignPublicIps?: OpsWorksBoolean;
        CustomRecipes?: OpsWorksRecipes;
        InstallUpdatesOnBoot?: OpsWorksBoolean;
        UseEbsOptimizedInstances?: OpsWorksBoolean;
        LifecycleEventConfiguration?: OpsWorksLifecycleEventConfiguration;
    }

    export interface OpsWorksUpdateMyUserProfileRequest {
        SshPublicKey?: OpsWorksString;
    }

    export interface OpsWorksUpdateRdsDbInstanceRequest {
        RdsDbInstanceArn: OpsWorksString;
        DbUser?: OpsWorksString;
        DbPassword?: OpsWorksString;
    }

    export interface OpsWorksUpdateStackRequest {
        StackId: OpsWorksString;
        Name?: OpsWorksString;
        Attributes?: OpsWorksStackAttributes;
        ServiceRoleArn?: OpsWorksString;
        DefaultInstanceProfileArn?: OpsWorksString;
        DefaultOs?: OpsWorksString;
        HostnameTheme?: OpsWorksString;
        DefaultAvailabilityZone?: OpsWorksString;
        DefaultSubnetId?: OpsWorksString;
        CustomJson?: OpsWorksString;
        ConfigurationManager?: OpsWorksStackConfigurationManager;
        ChefConfiguration?: OpsWorksChefConfiguration;
        UseCustomCookbooks?: OpsWorksBoolean;
        CustomCookbooksSource?: OpsWorksSource;
        DefaultSshKeyName?: OpsWorksString;
        DefaultRootDeviceType?: OpsWorksRootDeviceType;
        UseOpsworksSecurityGroups?: OpsWorksBoolean;
    }

    export interface OpsWorksUpdateUserProfileRequest {
        IamUserArn: OpsWorksString;
        SshUsername?: OpsWorksString;
        SshPublicKey?: OpsWorksString;
        AllowSelfManagement?: OpsWorksBoolean;
    }

    export interface OpsWorksUpdateVolumeRequest {
        VolumeId: OpsWorksString;
        Name?: OpsWorksString;
        MountPoint?: OpsWorksString;
    }

    export interface OpsWorksUserProfile {
        IamUserArn?: OpsWorksString;
        Name?: OpsWorksString;
        SshUsername?: OpsWorksString;
        SshPublicKey?: OpsWorksString;
        AllowSelfManagement?: OpsWorksBoolean;
    }

    export type OpsWorksUserProfiles = Array<OpsWorksUserProfile>;
    export type OpsWorksValidForInMinutes = number;
    export interface OpsWorksValidationException {
        message?: OpsWorksString;
    }

    export type OpsWorksVirtualizationType = string;
    export interface OpsWorksVolume {
        VolumeId?: OpsWorksString;
        Ec2VolumeId?: OpsWorksString;
        Name?: OpsWorksString;
        RaidArrayId?: OpsWorksString;
        InstanceId?: OpsWorksString;
        Status?: OpsWorksString;
        Size?: OpsWorksInteger;
        Device?: OpsWorksString;
        MountPoint?: OpsWorksString;
        Region?: OpsWorksString;
        AvailabilityZone?: OpsWorksString;
        VolumeType?: OpsWorksString;
        Iops?: OpsWorksInteger;
    }

    export interface OpsWorksVolumeConfiguration {
        MountPoint: OpsWorksString;
        RaidLevel?: OpsWorksInteger;
        NumberOfDisks: OpsWorksInteger;
        Size: OpsWorksInteger;
        VolumeType?: OpsWorksString;
        Iops?: OpsWorksInteger;
    }

    export type OpsWorksVolumeConfigurations = Array<OpsWorksVolumeConfiguration>;
    export type OpsWorksVolumeType = string;
    export type OpsWorksVolumes = Array<OpsWorksVolume>;
    export interface OpsWorksWeeklyAutoScalingSchedule {
        Monday?: OpsWorksDailyAutoScalingSchedule;
        Tuesday?: OpsWorksDailyAutoScalingSchedule;
        Wednesday?: OpsWorksDailyAutoScalingSchedule;
        Thursday?: OpsWorksDailyAutoScalingSchedule;
        Friday?: OpsWorksDailyAutoScalingSchedule;
        Saturday?: OpsWorksDailyAutoScalingSchedule;
        Sunday?: OpsWorksDailyAutoScalingSchedule;
    }

}
