// DO NOT EDIT!
//
declare module "aws-sdk" {
    export class EC2 {
      constructor(options?: any);
      acceptVpcPeeringConnection(params: EC2AcceptVpcPeeringConnectionRequest, callback: (err: any, data: EC2AcceptVpcPeeringConnectionResult|any) => void): void;
      allocateAddress(params: EC2AllocateAddressRequest, callback: (err: any, data: EC2AllocateAddressResult|any) => void): void;
      assignPrivateIpAddresses(params: EC2AssignPrivateIpAddressesRequest, callback: (err: any, data: any) => void): void;
      associateAddress(params: EC2AssociateAddressRequest, callback: (err: any, data: EC2AssociateAddressResult|any) => void): void;
      associateDhcpOptions(params: EC2AssociateDhcpOptionsRequest, callback: (err: any, data: any) => void): void;
      associateRouteTable(params: EC2AssociateRouteTableRequest, callback: (err: any, data: EC2AssociateRouteTableResult|any) => void): void;
      attachClassicLinkVpc(params: EC2AttachClassicLinkVpcRequest, callback: (err: any, data: EC2AttachClassicLinkVpcResult|any) => void): void;
      attachInternetGateway(params: EC2AttachInternetGatewayRequest, callback: (err: any, data: any) => void): void;
      attachNetworkInterface(params: EC2AttachNetworkInterfaceRequest, callback: (err: any, data: EC2AttachNetworkInterfaceResult|any) => void): void;
      attachVolume(params: EC2AttachVolumeRequest, callback: (err: any, data: EC2VolumeAttachment|any) => void): void;
      attachVpnGateway(params: EC2AttachVpnGatewayRequest, callback: (err: any, data: EC2AttachVpnGatewayResult|any) => void): void;
      authorizeSecurityGroupEgress(params: EC2AuthorizeSecurityGroupEgressRequest, callback: (err: any, data: any) => void): void;
      authorizeSecurityGroupIngress(params: EC2AuthorizeSecurityGroupIngressRequest, callback: (err: any, data: any) => void): void;
      bundleInstance(params: EC2BundleInstanceRequest, callback: (err: any, data: EC2BundleInstanceResult|any) => void): void;
      cancelBundleTask(params: EC2CancelBundleTaskRequest, callback: (err: any, data: EC2CancelBundleTaskResult|any) => void): void;
      cancelConversionTask(params: EC2CancelConversionRequest, callback: (err: any, data: any) => void): void;
      cancelExportTask(params: EC2CancelExportTaskRequest, callback: (err: any, data: any) => void): void;
      cancelImportTask(params: EC2CancelImportTaskRequest, callback: (err: any, data: EC2CancelImportTaskResult|any) => void): void;
      cancelReservedInstancesListing(params: EC2CancelReservedInstancesListingRequest, callback: (err: any, data: EC2CancelReservedInstancesListingResult|any) => void): void;
      cancelSpotFleetRequests(params: EC2CancelSpotFleetRequestsRequest, callback: (err: any, data: EC2CancelSpotFleetRequestsResponse|any) => void): void;
      cancelSpotInstanceRequests(params: EC2CancelSpotInstanceRequestsRequest, callback: (err: any, data: EC2CancelSpotInstanceRequestsResult|any) => void): void;
      confirmProductInstance(params: EC2ConfirmProductInstanceRequest, callback: (err: any, data: EC2ConfirmProductInstanceResult|any) => void): void;
      copyImage(params: EC2CopyImageRequest, callback: (err: any, data: EC2CopyImageResult|any) => void): void;
      copySnapshot(params: EC2CopySnapshotRequest, callback: (err: any, data: EC2CopySnapshotResult|any) => void): void;
      createCustomerGateway(params: EC2CreateCustomerGatewayRequest, callback: (err: any, data: EC2CreateCustomerGatewayResult|any) => void): void;
      createDhcpOptions(params: EC2CreateDhcpOptionsRequest, callback: (err: any, data: EC2CreateDhcpOptionsResult|any) => void): void;
      createImage(params: EC2CreateImageRequest, callback: (err: any, data: EC2CreateImageResult|any) => void): void;
      createInstanceExportTask(params: EC2CreateInstanceExportTaskRequest, callback: (err: any, data: EC2CreateInstanceExportTaskResult|any) => void): void;
      createInternetGateway(params: EC2CreateInternetGatewayRequest, callback: (err: any, data: EC2CreateInternetGatewayResult|any) => void): void;
      createKeyPair(params: EC2CreateKeyPairRequest, callback: (err: any, data: EC2KeyPair|any) => void): void;
      createNetworkAcl(params: EC2CreateNetworkAclRequest, callback: (err: any, data: EC2CreateNetworkAclResult|any) => void): void;
      createNetworkAclEntry(params: EC2CreateNetworkAclEntryRequest, callback: (err: any, data: any) => void): void;
      createNetworkInterface(params: EC2CreateNetworkInterfaceRequest, callback: (err: any, data: EC2CreateNetworkInterfaceResult|any) => void): void;
      createPlacementGroup(params: EC2CreatePlacementGroupRequest, callback: (err: any, data: any) => void): void;
      createReservedInstancesListing(params: EC2CreateReservedInstancesListingRequest, callback: (err: any, data: EC2CreateReservedInstancesListingResult|any) => void): void;
      createRoute(params: EC2CreateRouteRequest, callback: (err: any, data: EC2CreateRouteResult|any) => void): void;
      createRouteTable(params: EC2CreateRouteTableRequest, callback: (err: any, data: EC2CreateRouteTableResult|any) => void): void;
      createSecurityGroup(params: EC2CreateSecurityGroupRequest, callback: (err: any, data: EC2CreateSecurityGroupResult|any) => void): void;
      createSnapshot(params: EC2CreateSnapshotRequest, callback: (err: any, data: EC2Snapshot|any) => void): void;
      createSpotDatafeedSubscription(params: EC2CreateSpotDatafeedSubscriptionRequest, callback: (err: any, data: EC2CreateSpotDatafeedSubscriptionResult|any) => void): void;
      createSubnet(params: EC2CreateSubnetRequest, callback: (err: any, data: EC2CreateSubnetResult|any) => void): void;
      createTags(params: EC2CreateTagsRequest, callback: (err: any, data: any) => void): void;
      createVolume(params: EC2CreateVolumeRequest, callback: (err: any, data: EC2Volume|any) => void): void;
      createVpc(params: EC2CreateVpcRequest, callback: (err: any, data: EC2CreateVpcResult|any) => void): void;
      createVpcEndpoint(params: EC2CreateVpcEndpointRequest, callback: (err: any, data: EC2CreateVpcEndpointResult|any) => void): void;
      createVpcPeeringConnection(params: EC2CreateVpcPeeringConnectionRequest, callback: (err: any, data: EC2CreateVpcPeeringConnectionResult|any) => void): void;
      createVpnConnection(params: EC2CreateVpnConnectionRequest, callback: (err: any, data: EC2CreateVpnConnectionResult|any) => void): void;
      createVpnConnectionRoute(params: EC2CreateVpnConnectionRouteRequest, callback: (err: any, data: any) => void): void;
      createVpnGateway(params: EC2CreateVpnGatewayRequest, callback: (err: any, data: EC2CreateVpnGatewayResult|any) => void): void;
      deleteCustomerGateway(params: EC2DeleteCustomerGatewayRequest, callback: (err: any, data: any) => void): void;
      deleteDhcpOptions(params: EC2DeleteDhcpOptionsRequest, callback: (err: any, data: any) => void): void;
      deleteInternetGateway(params: EC2DeleteInternetGatewayRequest, callback: (err: any, data: any) => void): void;
      deleteKeyPair(params: EC2DeleteKeyPairRequest, callback: (err: any, data: any) => void): void;
      deleteNetworkAcl(params: EC2DeleteNetworkAclRequest, callback: (err: any, data: any) => void): void;
      deleteNetworkAclEntry(params: EC2DeleteNetworkAclEntryRequest, callback: (err: any, data: any) => void): void;
      deleteNetworkInterface(params: EC2DeleteNetworkInterfaceRequest, callback: (err: any, data: any) => void): void;
      deletePlacementGroup(params: EC2DeletePlacementGroupRequest, callback: (err: any, data: any) => void): void;
      deleteRoute(params: EC2DeleteRouteRequest, callback: (err: any, data: any) => void): void;
      deleteRouteTable(params: EC2DeleteRouteTableRequest, callback: (err: any, data: any) => void): void;
      deleteSecurityGroup(params: EC2DeleteSecurityGroupRequest, callback: (err: any, data: any) => void): void;
      deleteSnapshot(params: EC2DeleteSnapshotRequest, callback: (err: any, data: any) => void): void;
      deleteSpotDatafeedSubscription(params: EC2DeleteSpotDatafeedSubscriptionRequest, callback: (err: any, data: any) => void): void;
      deleteSubnet(params: EC2DeleteSubnetRequest, callback: (err: any, data: any) => void): void;
      deleteTags(params: EC2DeleteTagsRequest, callback: (err: any, data: any) => void): void;
      deleteVolume(params: EC2DeleteVolumeRequest, callback: (err: any, data: any) => void): void;
      deleteVpc(params: EC2DeleteVpcRequest, callback: (err: any, data: any) => void): void;
      deleteVpcEndpoints(params: EC2DeleteVpcEndpointsRequest, callback: (err: any, data: EC2DeleteVpcEndpointsResult|any) => void): void;
      deleteVpcPeeringConnection(params: EC2DeleteVpcPeeringConnectionRequest, callback: (err: any, data: EC2DeleteVpcPeeringConnectionResult|any) => void): void;
      deleteVpnConnection(params: EC2DeleteVpnConnectionRequest, callback: (err: any, data: any) => void): void;
      deleteVpnConnectionRoute(params: EC2DeleteVpnConnectionRouteRequest, callback: (err: any, data: any) => void): void;
      deleteVpnGateway(params: EC2DeleteVpnGatewayRequest, callback: (err: any, data: any) => void): void;
      deregisterImage(params: EC2DeregisterImageRequest, callback: (err: any, data: any) => void): void;
      describeAccountAttributes(params: EC2DescribeAccountAttributesRequest, callback: (err: any, data: EC2DescribeAccountAttributesResult|any) => void): void;
      describeAddresses(params: EC2DescribeAddressesRequest, callback: (err: any, data: EC2DescribeAddressesResult|any) => void): void;
      describeAvailabilityZones(params: EC2DescribeAvailabilityZonesRequest, callback: (err: any, data: EC2DescribeAvailabilityZonesResult|any) => void): void;
      describeBundleTasks(params: EC2DescribeBundleTasksRequest, callback: (err: any, data: EC2DescribeBundleTasksResult|any) => void): void;
      describeClassicLinkInstances(params: EC2DescribeClassicLinkInstancesRequest, callback: (err: any, data: EC2DescribeClassicLinkInstancesResult|any) => void): void;
      describeConversionTasks(params: EC2DescribeConversionTasksRequest, callback: (err: any, data: EC2DescribeConversionTasksResult|any) => void): void;
      describeCustomerGateways(params: EC2DescribeCustomerGatewaysRequest, callback: (err: any, data: EC2DescribeCustomerGatewaysResult|any) => void): void;
      describeDhcpOptions(params: EC2DescribeDhcpOptionsRequest, callback: (err: any, data: EC2DescribeDhcpOptionsResult|any) => void): void;
      describeExportTasks(params: EC2DescribeExportTasksRequest, callback: (err: any, data: EC2DescribeExportTasksResult|any) => void): void;
      describeImageAttribute(params: EC2DescribeImageAttributeRequest, callback: (err: any, data: EC2ImageAttribute|any) => void): void;
      describeImages(params: EC2DescribeImagesRequest, callback: (err: any, data: EC2DescribeImagesResult|any) => void): void;
      describeImportImageTasks(params: EC2DescribeImportImageTasksRequest, callback: (err: any, data: EC2DescribeImportImageTasksResult|any) => void): void;
      describeImportSnapshotTasks(params: EC2DescribeImportSnapshotTasksRequest, callback: (err: any, data: EC2DescribeImportSnapshotTasksResult|any) => void): void;
      describeInstanceAttribute(params: EC2DescribeInstanceAttributeRequest, callback: (err: any, data: EC2InstanceAttribute|any) => void): void;
      describeInstanceStatus(params: EC2DescribeInstanceStatusRequest, callback: (err: any, data: EC2DescribeInstanceStatusResult|any) => void): void;
      describeInstances(params: EC2DescribeInstancesRequest, callback: (err: any, data: EC2DescribeInstancesResult|any) => void): void;
      describeInternetGateways(params: EC2DescribeInternetGatewaysRequest, callback: (err: any, data: EC2DescribeInternetGatewaysResult|any) => void): void;
      describeKeyPairs(params: EC2DescribeKeyPairsRequest, callback: (err: any, data: EC2DescribeKeyPairsResult|any) => void): void;
      describeMovingAddresses(params: EC2DescribeMovingAddressesRequest, callback: (err: any, data: EC2DescribeMovingAddressesResult|any) => void): void;
      describeNetworkAcls(params: EC2DescribeNetworkAclsRequest, callback: (err: any, data: EC2DescribeNetworkAclsResult|any) => void): void;
      describeNetworkInterfaceAttribute(params: EC2DescribeNetworkInterfaceAttributeRequest, callback: (err: any, data: EC2DescribeNetworkInterfaceAttributeResult|any) => void): void;
      describeNetworkInterfaces(params: EC2DescribeNetworkInterfacesRequest, callback: (err: any, data: EC2DescribeNetworkInterfacesResult|any) => void): void;
      describePlacementGroups(params: EC2DescribePlacementGroupsRequest, callback: (err: any, data: EC2DescribePlacementGroupsResult|any) => void): void;
      describePrefixLists(params: EC2DescribePrefixListsRequest, callback: (err: any, data: EC2DescribePrefixListsResult|any) => void): void;
      describeRegions(params: EC2DescribeRegionsRequest, callback: (err: any, data: EC2DescribeRegionsResult|any) => void): void;
      describeReservedInstances(params: EC2DescribeReservedInstancesRequest, callback: (err: any, data: EC2DescribeReservedInstancesResult|any) => void): void;
      describeReservedInstancesListings(params: EC2DescribeReservedInstancesListingsRequest, callback: (err: any, data: EC2DescribeReservedInstancesListingsResult|any) => void): void;
      describeReservedInstancesModifications(params: EC2DescribeReservedInstancesModificationsRequest, callback: (err: any, data: EC2DescribeReservedInstancesModificationsResult|any) => void): void;
      describeReservedInstancesOfferings(params: EC2DescribeReservedInstancesOfferingsRequest, callback: (err: any, data: EC2DescribeReservedInstancesOfferingsResult|any) => void): void;
      describeRouteTables(params: EC2DescribeRouteTablesRequest, callback: (err: any, data: EC2DescribeRouteTablesResult|any) => void): void;
      describeSecurityGroups(params: EC2DescribeSecurityGroupsRequest, callback: (err: any, data: EC2DescribeSecurityGroupsResult|any) => void): void;
      describeSnapshotAttribute(params: EC2DescribeSnapshotAttributeRequest, callback: (err: any, data: EC2DescribeSnapshotAttributeResult|any) => void): void;
      describeSnapshots(params: EC2DescribeSnapshotsRequest, callback: (err: any, data: EC2DescribeSnapshotsResult|any) => void): void;
      describeSpotDatafeedSubscription(params: EC2DescribeSpotDatafeedSubscriptionRequest, callback: (err: any, data: EC2DescribeSpotDatafeedSubscriptionResult|any) => void): void;
      describeSpotFleetInstances(params: EC2DescribeSpotFleetInstancesRequest, callback: (err: any, data: EC2DescribeSpotFleetInstancesResponse|any) => void): void;
      describeSpotFleetRequestHistory(params: EC2DescribeSpotFleetRequestHistoryRequest, callback: (err: any, data: EC2DescribeSpotFleetRequestHistoryResponse|any) => void): void;
      describeSpotFleetRequests(params: EC2DescribeSpotFleetRequestsRequest, callback: (err: any, data: EC2DescribeSpotFleetRequestsResponse|any) => void): void;
      describeSpotInstanceRequests(params: EC2DescribeSpotInstanceRequestsRequest, callback: (err: any, data: EC2DescribeSpotInstanceRequestsResult|any) => void): void;
      describeSpotPriceHistory(params: EC2DescribeSpotPriceHistoryRequest, callback: (err: any, data: EC2DescribeSpotPriceHistoryResult|any) => void): void;
      describeSubnets(params: EC2DescribeSubnetsRequest, callback: (err: any, data: EC2DescribeSubnetsResult|any) => void): void;
      describeTags(params: EC2DescribeTagsRequest, callback: (err: any, data: EC2DescribeTagsResult|any) => void): void;
      describeVolumeAttribute(params: EC2DescribeVolumeAttributeRequest, callback: (err: any, data: EC2DescribeVolumeAttributeResult|any) => void): void;
      describeVolumeStatus(params: EC2DescribeVolumeStatusRequest, callback: (err: any, data: EC2DescribeVolumeStatusResult|any) => void): void;
      describeVolumes(params: EC2DescribeVolumesRequest, callback: (err: any, data: EC2DescribeVolumesResult|any) => void): void;
      describeVpcAttribute(params: EC2DescribeVpcAttributeRequest, callback: (err: any, data: EC2DescribeVpcAttributeResult|any) => void): void;
      describeVpcClassicLink(params: EC2DescribeVpcClassicLinkRequest, callback: (err: any, data: EC2DescribeVpcClassicLinkResult|any) => void): void;
      describeVpcEndpointServices(params: EC2DescribeVpcEndpointServicesRequest, callback: (err: any, data: EC2DescribeVpcEndpointServicesResult|any) => void): void;
      describeVpcEndpoints(params: EC2DescribeVpcEndpointsRequest, callback: (err: any, data: EC2DescribeVpcEndpointsResult|any) => void): void;
      describeVpcPeeringConnections(params: EC2DescribeVpcPeeringConnectionsRequest, callback: (err: any, data: EC2DescribeVpcPeeringConnectionsResult|any) => void): void;
      describeVpcs(params: EC2DescribeVpcsRequest, callback: (err: any, data: EC2DescribeVpcsResult|any) => void): void;
      describeVpnConnections(params: EC2DescribeVpnConnectionsRequest, callback: (err: any, data: EC2DescribeVpnConnectionsResult|any) => void): void;
      describeVpnGateways(params: EC2DescribeVpnGatewaysRequest, callback: (err: any, data: EC2DescribeVpnGatewaysResult|any) => void): void;
      detachClassicLinkVpc(params: EC2DetachClassicLinkVpcRequest, callback: (err: any, data: EC2DetachClassicLinkVpcResult|any) => void): void;
      detachInternetGateway(params: EC2DetachInternetGatewayRequest, callback: (err: any, data: any) => void): void;
      detachNetworkInterface(params: EC2DetachNetworkInterfaceRequest, callback: (err: any, data: any) => void): void;
      detachVolume(params: EC2DetachVolumeRequest, callback: (err: any, data: EC2VolumeAttachment|any) => void): void;
      detachVpnGateway(params: EC2DetachVpnGatewayRequest, callback: (err: any, data: any) => void): void;
      disableVgwRoutePropagation(params: EC2DisableVgwRoutePropagationRequest, callback: (err: any, data: any) => void): void;
      disableVpcClassicLink(params: EC2DisableVpcClassicLinkRequest, callback: (err: any, data: EC2DisableVpcClassicLinkResult|any) => void): void;
      disassociateAddress(params: EC2DisassociateAddressRequest, callback: (err: any, data: any) => void): void;
      disassociateRouteTable(params: EC2DisassociateRouteTableRequest, callback: (err: any, data: any) => void): void;
      enableVgwRoutePropagation(params: EC2EnableVgwRoutePropagationRequest, callback: (err: any, data: any) => void): void;
      enableVolumeIO(params: EC2EnableVolumeIORequest, callback: (err: any, data: any) => void): void;
      enableVpcClassicLink(params: EC2EnableVpcClassicLinkRequest, callback: (err: any, data: EC2EnableVpcClassicLinkResult|any) => void): void;
      getConsoleOutput(params: EC2GetConsoleOutputRequest, callback: (err: any, data: EC2GetConsoleOutputResult|any) => void): void;
      getPasswordData(params: EC2GetPasswordDataRequest, callback: (err: any, data: EC2GetPasswordDataResult|any) => void): void;
      importImage(params: EC2ImportImageRequest, callback: (err: any, data: EC2ImportImageResult|any) => void): void;
      importInstance(params: EC2ImportInstanceRequest, callback: (err: any, data: EC2ImportInstanceResult|any) => void): void;
      importKeyPair(params: EC2ImportKeyPairRequest, callback: (err: any, data: EC2ImportKeyPairResult|any) => void): void;
      importSnapshot(params: EC2ImportSnapshotRequest, callback: (err: any, data: EC2ImportSnapshotResult|any) => void): void;
      importVolume(params: EC2ImportVolumeRequest, callback: (err: any, data: EC2ImportVolumeResult|any) => void): void;
      modifyImageAttribute(params: EC2ModifyImageAttributeRequest, callback: (err: any, data: any) => void): void;
      modifyInstanceAttribute(params: EC2ModifyInstanceAttributeRequest, callback: (err: any, data: any) => void): void;
      modifyNetworkInterfaceAttribute(params: EC2ModifyNetworkInterfaceAttributeRequest, callback: (err: any, data: any) => void): void;
      modifyReservedInstances(params: EC2ModifyReservedInstancesRequest, callback: (err: any, data: EC2ModifyReservedInstancesResult|any) => void): void;
      modifySnapshotAttribute(params: EC2ModifySnapshotAttributeRequest, callback: (err: any, data: any) => void): void;
      modifySubnetAttribute(params: EC2ModifySubnetAttributeRequest, callback: (err: any, data: any) => void): void;
      modifyVolumeAttribute(params: EC2ModifyVolumeAttributeRequest, callback: (err: any, data: any) => void): void;
      modifyVpcAttribute(params: EC2ModifyVpcAttributeRequest, callback: (err: any, data: any) => void): void;
      modifyVpcEndpoint(params: EC2ModifyVpcEndpointRequest, callback: (err: any, data: EC2ModifyVpcEndpointResult|any) => void): void;
      monitorInstances(params: EC2MonitorInstancesRequest, callback: (err: any, data: EC2MonitorInstancesResult|any) => void): void;
      moveAddressToVpc(params: EC2MoveAddressToVpcRequest, callback: (err: any, data: EC2MoveAddressToVpcResult|any) => void): void;
      purchaseReservedInstancesOffering(params: EC2PurchaseReservedInstancesOfferingRequest, callback: (err: any, data: EC2PurchaseReservedInstancesOfferingResult|any) => void): void;
      rebootInstances(params: EC2RebootInstancesRequest, callback: (err: any, data: any) => void): void;
      registerImage(params: EC2RegisterImageRequest, callback: (err: any, data: EC2RegisterImageResult|any) => void): void;
      rejectVpcPeeringConnection(params: EC2RejectVpcPeeringConnectionRequest, callback: (err: any, data: EC2RejectVpcPeeringConnectionResult|any) => void): void;
      releaseAddress(params: EC2ReleaseAddressRequest, callback: (err: any, data: any) => void): void;
      replaceNetworkAclAssociation(params: EC2ReplaceNetworkAclAssociationRequest, callback: (err: any, data: EC2ReplaceNetworkAclAssociationResult|any) => void): void;
      replaceNetworkAclEntry(params: EC2ReplaceNetworkAclEntryRequest, callback: (err: any, data: any) => void): void;
      replaceRoute(params: EC2ReplaceRouteRequest, callback: (err: any, data: any) => void): void;
      replaceRouteTableAssociation(params: EC2ReplaceRouteTableAssociationRequest, callback: (err: any, data: EC2ReplaceRouteTableAssociationResult|any) => void): void;
      reportInstanceStatus(params: EC2ReportInstanceStatusRequest, callback: (err: any, data: any) => void): void;
      requestSpotFleet(params: EC2RequestSpotFleetRequest, callback: (err: any, data: EC2RequestSpotFleetResponse|any) => void): void;
      requestSpotInstances(params: EC2RequestSpotInstancesRequest, callback: (err: any, data: EC2RequestSpotInstancesResult|any) => void): void;
      resetImageAttribute(params: EC2ResetImageAttributeRequest, callback: (err: any, data: any) => void): void;
      resetInstanceAttribute(params: EC2ResetInstanceAttributeRequest, callback: (err: any, data: any) => void): void;
      resetNetworkInterfaceAttribute(params: EC2ResetNetworkInterfaceAttributeRequest, callback: (err: any, data: any) => void): void;
      resetSnapshotAttribute(params: EC2ResetSnapshotAttributeRequest, callback: (err: any, data: any) => void): void;
      restoreAddressToClassic(params: EC2RestoreAddressToClassicRequest, callback: (err: any, data: EC2RestoreAddressToClassicResult|any) => void): void;
      revokeSecurityGroupEgress(params: EC2RevokeSecurityGroupEgressRequest, callback: (err: any, data: any) => void): void;
      revokeSecurityGroupIngress(params: EC2RevokeSecurityGroupIngressRequest, callback: (err: any, data: any) => void): void;
      runInstances(params: EC2RunInstancesRequest, callback: (err: any, data: EC2Reservation|any) => void): void;
      startInstances(params: EC2StartInstancesRequest, callback: (err: any, data: EC2StartInstancesResult|any) => void): void;
      stopInstances(params: EC2StopInstancesRequest, callback: (err: any, data: EC2StopInstancesResult|any) => void): void;
      terminateInstances(params: EC2TerminateInstancesRequest, callback: (err: any, data: EC2TerminateInstancesResult|any) => void): void;
      unassignPrivateIpAddresses(params: EC2UnassignPrivateIpAddressesRequest, callback: (err: any, data: any) => void): void;
      unmonitorInstances(params: EC2UnmonitorInstancesRequest, callback: (err: any, data: EC2UnmonitorInstancesResult|any) => void): void;
    }

    export interface EC2AcceptVpcPeeringConnectionRequest {
        DryRun?: EC2Boolean;
        VpcPeeringConnectionId?: EC2String;
    }

    export interface EC2AcceptVpcPeeringConnectionResult {
        VpcPeeringConnection?: EC2VpcPeeringConnection;
    }

    export interface EC2AccountAttribute {
        AttributeName?: EC2String;
        AttributeValues?: EC2AccountAttributeValueList;
    }

    export type EC2AccountAttributeList = Array<EC2AccountAttribute>;
    export type EC2AccountAttributeName = string;
    export type EC2AccountAttributeNameStringList = Array<EC2AccountAttributeName>;
    export interface EC2AccountAttributeValue {
        AttributeValue?: EC2String;
    }

    export type EC2AccountAttributeValueList = Array<EC2AccountAttributeValue>;
    export interface EC2ActiveInstance {
        InstanceType?: EC2String;
        InstanceId?: EC2String;
        SpotInstanceRequestId?: EC2String;
    }

    export type EC2ActiveInstanceSet = Array<EC2ActiveInstance>;
    export interface EC2Address {
        InstanceId?: EC2String;
        PublicIp?: EC2String;
        AllocationId?: EC2String;
        AssociationId?: EC2String;
        Domain?: EC2DomainType;
        NetworkInterfaceId?: EC2String;
        NetworkInterfaceOwnerId?: EC2String;
        PrivateIpAddress?: EC2String;
    }

    export type EC2AddressList = Array<EC2Address>;
    export interface EC2AllocateAddressRequest {
        DryRun?: EC2Boolean;
        Domain?: EC2DomainType;
    }

    export interface EC2AllocateAddressResult {
        PublicIp?: EC2String;
        Domain?: EC2DomainType;
        AllocationId?: EC2String;
    }

    export type EC2AllocationIdList = Array<EC2String>;
    export type EC2ArchitectureValues = string;
    export interface EC2AssignPrivateIpAddressesRequest {
        NetworkInterfaceId: EC2String;
        PrivateIpAddresses?: EC2PrivateIpAddressStringList;
        SecondaryPrivateIpAddressCount?: EC2Integer;
        AllowReassignment?: EC2Boolean;
    }

    export interface EC2AssociateAddressRequest {
        DryRun?: EC2Boolean;
        InstanceId?: EC2String;
        PublicIp?: EC2String;
        AllocationId?: EC2String;
        NetworkInterfaceId?: EC2String;
        PrivateIpAddress?: EC2String;
        AllowReassociation?: EC2Boolean;
    }

    export interface EC2AssociateAddressResult {
        AssociationId?: EC2String;
    }

    export interface EC2AssociateDhcpOptionsRequest {
        DryRun?: EC2Boolean;
        DhcpOptionsId: EC2String;
        VpcId: EC2String;
    }

    export interface EC2AssociateRouteTableRequest {
        DryRun?: EC2Boolean;
        SubnetId: EC2String;
        RouteTableId: EC2String;
    }

    export interface EC2AssociateRouteTableResult {
        AssociationId?: EC2String;
    }

    export interface EC2AttachClassicLinkVpcRequest {
        DryRun?: EC2Boolean;
        InstanceId: EC2String;
        VpcId: EC2String;
        Groups: EC2GroupIdStringList;
    }

    export interface EC2AttachClassicLinkVpcResult {
        Return?: EC2Boolean;
    }

    export interface EC2AttachInternetGatewayRequest {
        DryRun?: EC2Boolean;
        InternetGatewayId: EC2String;
        VpcId: EC2String;
    }

    export interface EC2AttachNetworkInterfaceRequest {
        DryRun?: EC2Boolean;
        NetworkInterfaceId: EC2String;
        InstanceId: EC2String;
        DeviceIndex: EC2Integer;
    }

    export interface EC2AttachNetworkInterfaceResult {
        AttachmentId?: EC2String;
    }

    export interface EC2AttachVolumeRequest {
        DryRun?: EC2Boolean;
        VolumeId: EC2String;
        InstanceId: EC2String;
        Device: EC2String;
    }

    export interface EC2AttachVpnGatewayRequest {
        DryRun?: EC2Boolean;
        VpnGatewayId: EC2String;
        VpcId: EC2String;
    }

    export interface EC2AttachVpnGatewayResult {
        VpcAttachment?: EC2VpcAttachment;
    }

    export type EC2AttachmentStatus = string;
    export interface EC2AttributeBooleanValue {
        Value?: EC2Boolean;
    }

    export interface EC2AttributeValue {
        Value?: EC2String;
    }

    export interface EC2AuthorizeSecurityGroupEgressRequest {
        DryRun?: EC2Boolean;
        GroupId: EC2String;
        SourceSecurityGroupName?: EC2String;
        SourceSecurityGroupOwnerId?: EC2String;
        IpProtocol?: EC2String;
        FromPort?: EC2Integer;
        ToPort?: EC2Integer;
        CidrIp?: EC2String;
        IpPermissions?: EC2IpPermissionList;
    }

    export interface EC2AuthorizeSecurityGroupIngressRequest {
        DryRun?: EC2Boolean;
        GroupName?: EC2String;
        GroupId?: EC2String;
        SourceSecurityGroupName?: EC2String;
        SourceSecurityGroupOwnerId?: EC2String;
        IpProtocol?: EC2String;
        FromPort?: EC2Integer;
        ToPort?: EC2Integer;
        CidrIp?: EC2String;
        IpPermissions?: EC2IpPermissionList;
    }

    export interface EC2AvailabilityZone {
        ZoneName?: EC2String;
        State?: EC2AvailabilityZoneState;
        RegionName?: EC2String;
        Messages?: EC2AvailabilityZoneMessageList;
    }

    export type EC2AvailabilityZoneList = Array<EC2AvailabilityZone>;
    export interface EC2AvailabilityZoneMessage {
        Message?: EC2String;
    }

    export type EC2AvailabilityZoneMessageList = Array<EC2AvailabilityZoneMessage>;
    export type EC2AvailabilityZoneState = string;
    export type EC2BatchState = string;
    export interface EC2BlockDeviceMapping {
        VirtualName?: EC2String;
        DeviceName?: EC2String;
        Ebs?: EC2EbsBlockDevice;
        NoDevice?: EC2String;
    }

    export type EC2BlockDeviceMappingList = Array<EC2BlockDeviceMapping>;
    export type EC2BlockDeviceMappingRequestList = Array<EC2BlockDeviceMapping>;
    export type EC2Boolean = boolean;
    export type EC2BundleIdStringList = Array<EC2String>;
    export interface EC2BundleInstanceRequest {
        DryRun?: EC2Boolean;
        InstanceId: EC2String;
        Storage: EC2Storage;
    }

    export interface EC2BundleInstanceResult {
        BundleTask?: EC2BundleTask;
    }

    export interface EC2BundleTask {
        InstanceId?: EC2String;
        BundleId?: EC2String;
        State?: EC2BundleTaskState;
        StartTime?: EC2DateTime;
        UpdateTime?: EC2DateTime;
        Storage?: EC2Storage;
        Progress?: EC2String;
        BundleTaskError?: EC2BundleTaskError;
    }

    export interface EC2BundleTaskError {
        Code?: EC2String;
        Message?: EC2String;
    }

    export type EC2BundleTaskList = Array<EC2BundleTask>;
    export type EC2BundleTaskState = string;
    export type EC2CancelBatchErrorCode = string;
    export interface EC2CancelBundleTaskRequest {
        DryRun?: EC2Boolean;
        BundleId: EC2String;
    }

    export interface EC2CancelBundleTaskResult {
        BundleTask?: EC2BundleTask;
    }

    export interface EC2CancelConversionRequest {
        DryRun?: EC2Boolean;
        ConversionTaskId: EC2String;
        ReasonMessage?: EC2String;
    }

    export interface EC2CancelExportTaskRequest {
        ExportTaskId: EC2String;
    }

    export interface EC2CancelImportTaskRequest {
        DryRun?: EC2Boolean;
        ImportTaskId?: EC2String;
        CancelReason?: EC2String;
    }

    export interface EC2CancelImportTaskResult {
        ImportTaskId?: EC2String;
        State?: EC2String;
        PreviousState?: EC2String;
    }

    export interface EC2CancelReservedInstancesListingRequest {
        ReservedInstancesListingId: EC2String;
    }

    export interface EC2CancelReservedInstancesListingResult {
        ReservedInstancesListings?: EC2ReservedInstancesListingList;
    }

    export interface EC2CancelSpotFleetRequestsError {
        Code: EC2CancelBatchErrorCode;
        Message: EC2String;
    }

    export interface EC2CancelSpotFleetRequestsErrorItem {
        SpotFleetRequestId: EC2String;
        Error: EC2CancelSpotFleetRequestsError;
    }

    export type EC2CancelSpotFleetRequestsErrorSet = Array<EC2CancelSpotFleetRequestsErrorItem>;
    export interface EC2CancelSpotFleetRequestsRequest {
        DryRun?: EC2Boolean;
        SpotFleetRequestIds: EC2ValueStringList;
        TerminateInstances: EC2Boolean;
    }

    export interface EC2CancelSpotFleetRequestsResponse {
        UnsuccessfulFleetRequests?: EC2CancelSpotFleetRequestsErrorSet;
        SuccessfulFleetRequests?: EC2CancelSpotFleetRequestsSuccessSet;
    }

    export interface EC2CancelSpotFleetRequestsSuccessItem {
        SpotFleetRequestId: EC2String;
        CurrentSpotFleetRequestState: EC2BatchState;
        PreviousSpotFleetRequestState: EC2BatchState;
    }

    export type EC2CancelSpotFleetRequestsSuccessSet = Array<EC2CancelSpotFleetRequestsSuccessItem>;
    export type EC2CancelSpotInstanceRequestState = string;
    export interface EC2CancelSpotInstanceRequestsRequest {
        DryRun?: EC2Boolean;
        SpotInstanceRequestIds: EC2SpotInstanceRequestIdList;
    }

    export interface EC2CancelSpotInstanceRequestsResult {
        CancelledSpotInstanceRequests?: EC2CancelledSpotInstanceRequestList;
    }

    export interface EC2CancelledSpotInstanceRequest {
        SpotInstanceRequestId?: EC2String;
        State?: EC2CancelSpotInstanceRequestState;
    }

    export type EC2CancelledSpotInstanceRequestList = Array<EC2CancelledSpotInstanceRequest>;
    export interface EC2ClassicLinkInstance {
        InstanceId?: EC2String;
        VpcId?: EC2String;
        Groups?: EC2GroupIdentifierList;
        Tags?: EC2TagList;
    }

    export type EC2ClassicLinkInstanceList = Array<EC2ClassicLinkInstance>;
    export interface EC2ClientData {
        UploadStart?: EC2DateTime;
        UploadEnd?: EC2DateTime;
        UploadSize?: EC2Double;
        Comment?: EC2String;
    }

    export interface EC2ConfirmProductInstanceRequest {
        DryRun?: EC2Boolean;
        ProductCode: EC2String;
        InstanceId: EC2String;
    }

    export interface EC2ConfirmProductInstanceResult {
        OwnerId?: EC2String;
    }

    export type EC2ContainerFormat = string;
    export type EC2ConversionIdStringList = Array<EC2String>;
    export interface EC2ConversionTask {
        ConversionTaskId: EC2String;
        ExpirationTime?: EC2String;
        ImportInstance?: EC2ImportInstanceTaskDetails;
        ImportVolume?: EC2ImportVolumeTaskDetails;
        State: EC2ConversionTaskState;
        StatusMessage?: EC2String;
        Tags?: EC2TagList;
    }

    export type EC2ConversionTaskState = string;
    export interface EC2CopyImageRequest {
        DryRun?: EC2Boolean;
        SourceRegion: EC2String;
        SourceImageId: EC2String;
        Name: EC2String;
        Description?: EC2String;
        ClientToken?: EC2String;
    }

    export interface EC2CopyImageResult {
        ImageId?: EC2String;
    }

    export interface EC2CopySnapshotRequest {
        DryRun?: EC2Boolean;
        SourceRegion: EC2String;
        SourceSnapshotId: EC2String;
        Description?: EC2String;
        DestinationRegion?: EC2String;
        PresignedUrl?: EC2String;
    }

    export interface EC2CopySnapshotResult {
        SnapshotId?: EC2String;
    }

    export interface EC2CreateCustomerGatewayRequest {
        DryRun?: EC2Boolean;
        Type: EC2GatewayType;
        PublicIp: EC2String;
        BgpAsn: EC2Integer;
    }

    export interface EC2CreateCustomerGatewayResult {
        CustomerGateway?: EC2CustomerGateway;
    }

    export interface EC2CreateDhcpOptionsRequest {
        DryRun?: EC2Boolean;
        DhcpConfigurations: EC2NewDhcpConfigurationList;
    }

    export interface EC2CreateDhcpOptionsResult {
        DhcpOptions?: EC2DhcpOptions;
    }

    export interface EC2CreateImageRequest {
        DryRun?: EC2Boolean;
        InstanceId: EC2String;
        Name: EC2String;
        Description?: EC2String;
        NoReboot?: EC2Boolean;
        BlockDeviceMappings?: EC2BlockDeviceMappingRequestList;
    }

    export interface EC2CreateImageResult {
        ImageId?: EC2String;
    }

    export interface EC2CreateInstanceExportTaskRequest {
        Description?: EC2String;
        InstanceId: EC2String;
        TargetEnvironment?: EC2ExportEnvironment;
        ExportToS3Task?: EC2ExportToS3TaskSpecification;
    }

    export interface EC2CreateInstanceExportTaskResult {
        ExportTask?: EC2ExportTask;
    }

    export interface EC2CreateInternetGatewayRequest {
        DryRun?: EC2Boolean;
    }

    export interface EC2CreateInternetGatewayResult {
        InternetGateway?: EC2InternetGateway;
    }

    export interface EC2CreateKeyPairRequest {
        DryRun?: EC2Boolean;
        KeyName: EC2String;
    }

    export interface EC2CreateNetworkAclEntryRequest {
        DryRun?: EC2Boolean;
        NetworkAclId: EC2String;
        RuleNumber: EC2Integer;
        Protocol: EC2String;
        RuleAction: EC2RuleAction;
        Egress: EC2Boolean;
        CidrBlock: EC2String;
        IcmpTypeCode?: EC2IcmpTypeCode;
        PortRange?: EC2PortRange;
    }

    export interface EC2CreateNetworkAclRequest {
        DryRun?: EC2Boolean;
        VpcId: EC2String;
    }

    export interface EC2CreateNetworkAclResult {
        NetworkAcl?: EC2NetworkAcl;
    }

    export interface EC2CreateNetworkInterfaceRequest {
        SubnetId: EC2String;
        Description?: EC2String;
        PrivateIpAddress?: EC2String;
        Groups?: EC2SecurityGroupIdStringList;
        PrivateIpAddresses?: EC2PrivateIpAddressSpecificationList;
        SecondaryPrivateIpAddressCount?: EC2Integer;
        DryRun?: EC2Boolean;
    }

    export interface EC2CreateNetworkInterfaceResult {
        NetworkInterface?: EC2NetworkInterface;
    }

    export interface EC2CreatePlacementGroupRequest {
        DryRun?: EC2Boolean;
        GroupName: EC2String;
        Strategy: EC2PlacementStrategy;
    }

    export interface EC2CreateReservedInstancesListingRequest {
        ReservedInstancesId: EC2String;
        InstanceCount: EC2Integer;
        PriceSchedules: EC2PriceScheduleSpecificationList;
        ClientToken: EC2String;
    }

    export interface EC2CreateReservedInstancesListingResult {
        ReservedInstancesListings?: EC2ReservedInstancesListingList;
    }

    export interface EC2CreateRouteRequest {
        DryRun?: EC2Boolean;
        RouteTableId: EC2String;
        DestinationCidrBlock: EC2String;
        GatewayId?: EC2String;
        InstanceId?: EC2String;
        NetworkInterfaceId?: EC2String;
        VpcPeeringConnectionId?: EC2String;
        ClientToken?: EC2String;
    }

    export interface EC2CreateRouteResult {
        Return?: EC2Boolean;
        ClientToken?: EC2String;
    }

    export interface EC2CreateRouteTableRequest {
        DryRun?: EC2Boolean;
        VpcId: EC2String;
    }

    export interface EC2CreateRouteTableResult {
        RouteTable?: EC2RouteTable;
    }

    export interface EC2CreateSecurityGroupRequest {
        DryRun?: EC2Boolean;
        GroupName: EC2String;
        Description: EC2String;
        VpcId?: EC2String;
    }

    export interface EC2CreateSecurityGroupResult {
        GroupId?: EC2String;
    }

    export interface EC2CreateSnapshotRequest {
        DryRun?: EC2Boolean;
        VolumeId: EC2String;
        Description?: EC2String;
    }

    export interface EC2CreateSpotDatafeedSubscriptionRequest {
        DryRun?: EC2Boolean;
        Bucket: EC2String;
        Prefix?: EC2String;
    }

    export interface EC2CreateSpotDatafeedSubscriptionResult {
        SpotDatafeedSubscription?: EC2SpotDatafeedSubscription;
    }

    export interface EC2CreateSubnetRequest {
        DryRun?: EC2Boolean;
        VpcId: EC2String;
        CidrBlock: EC2String;
        AvailabilityZone?: EC2String;
    }

    export interface EC2CreateSubnetResult {
        Subnet?: EC2Subnet;
    }

    export interface EC2CreateTagsRequest {
        DryRun?: EC2Boolean;
        Resources: EC2ResourceIdList;
        Tags: EC2TagList;
    }

    export interface EC2CreateVolumePermission {
        UserId?: EC2String;
        Group?: EC2PermissionGroup;
    }

    export type EC2CreateVolumePermissionList = Array<EC2CreateVolumePermission>;
    export interface EC2CreateVolumePermissionModifications {
        Add?: EC2CreateVolumePermissionList;
        Remove?: EC2CreateVolumePermissionList;
    }

    export interface EC2CreateVolumeRequest {
        DryRun?: EC2Boolean;
        Size?: EC2Integer;
        SnapshotId?: EC2String;
        AvailabilityZone: EC2String;
        VolumeType?: EC2VolumeType;
        Iops?: EC2Integer;
        Encrypted?: EC2Boolean;
        KmsKeyId?: EC2String;
    }

    export interface EC2CreateVpcEndpointRequest {
        DryRun?: EC2Boolean;
        VpcId: EC2String;
        ServiceName: EC2String;
        PolicyDocument?: EC2String;
        RouteTableIds?: EC2ValueStringList;
        ClientToken?: EC2String;
    }

    export interface EC2CreateVpcEndpointResult {
        VpcEndpoint?: EC2VpcEndpoint;
        ClientToken?: EC2String;
    }

    export interface EC2CreateVpcPeeringConnectionRequest {
        DryRun?: EC2Boolean;
        VpcId?: EC2String;
        PeerVpcId?: EC2String;
        PeerOwnerId?: EC2String;
    }

    export interface EC2CreateVpcPeeringConnectionResult {
        VpcPeeringConnection?: EC2VpcPeeringConnection;
    }

    export interface EC2CreateVpcRequest {
        DryRun?: EC2Boolean;
        CidrBlock: EC2String;
        InstanceTenancy?: EC2Tenancy;
    }

    export interface EC2CreateVpcResult {
        Vpc?: EC2Vpc;
    }

    export interface EC2CreateVpnConnectionRequest {
        DryRun?: EC2Boolean;
        Type: EC2String;
        CustomerGatewayId: EC2String;
        VpnGatewayId: EC2String;
        Options?: EC2VpnConnectionOptionsSpecification;
    }

    export interface EC2CreateVpnConnectionResult {
        VpnConnection?: EC2VpnConnection;
    }

    export interface EC2CreateVpnConnectionRouteRequest {
        VpnConnectionId: EC2String;
        DestinationCidrBlock: EC2String;
    }

    export interface EC2CreateVpnGatewayRequest {
        DryRun?: EC2Boolean;
        Type: EC2GatewayType;
        AvailabilityZone?: EC2String;
    }

    export interface EC2CreateVpnGatewayResult {
        VpnGateway?: EC2VpnGateway;
    }

    export type EC2CurrencyCodeValues = string;
    export interface EC2CustomerGateway {
        CustomerGatewayId?: EC2String;
        State?: EC2String;
        Type?: EC2String;
        IpAddress?: EC2String;
        BgpAsn?: EC2String;
        Tags?: EC2TagList;
    }

    export type EC2CustomerGatewayIdStringList = Array<EC2String>;
    export type EC2CustomerGatewayList = Array<EC2CustomerGateway>;
    export type EC2DatafeedSubscriptionState = string;
    export type EC2DateTime = number;
    export interface EC2DeleteCustomerGatewayRequest {
        DryRun?: EC2Boolean;
        CustomerGatewayId: EC2String;
    }

    export interface EC2DeleteDhcpOptionsRequest {
        DryRun?: EC2Boolean;
        DhcpOptionsId: EC2String;
    }

    export interface EC2DeleteInternetGatewayRequest {
        DryRun?: EC2Boolean;
        InternetGatewayId: EC2String;
    }

    export interface EC2DeleteKeyPairRequest {
        DryRun?: EC2Boolean;
        KeyName: EC2String;
    }

    export interface EC2DeleteNetworkAclEntryRequest {
        DryRun?: EC2Boolean;
        NetworkAclId: EC2String;
        RuleNumber: EC2Integer;
        Egress: EC2Boolean;
    }

    export interface EC2DeleteNetworkAclRequest {
        DryRun?: EC2Boolean;
        NetworkAclId: EC2String;
    }

    export interface EC2DeleteNetworkInterfaceRequest {
        DryRun?: EC2Boolean;
        NetworkInterfaceId: EC2String;
    }

    export interface EC2DeletePlacementGroupRequest {
        DryRun?: EC2Boolean;
        GroupName: EC2String;
    }

    export interface EC2DeleteRouteRequest {
        DryRun?: EC2Boolean;
        RouteTableId: EC2String;
        DestinationCidrBlock: EC2String;
    }

    export interface EC2DeleteRouteTableRequest {
        DryRun?: EC2Boolean;
        RouteTableId: EC2String;
    }

    export interface EC2DeleteSecurityGroupRequest {
        DryRun?: EC2Boolean;
        GroupName?: EC2String;
        GroupId?: EC2String;
    }

    export interface EC2DeleteSnapshotRequest {
        DryRun?: EC2Boolean;
        SnapshotId: EC2String;
    }

    export interface EC2DeleteSpotDatafeedSubscriptionRequest {
        DryRun?: EC2Boolean;
    }

    export interface EC2DeleteSubnetRequest {
        DryRun?: EC2Boolean;
        SubnetId: EC2String;
    }

    export interface EC2DeleteTagsRequest {
        DryRun?: EC2Boolean;
        Resources: EC2ResourceIdList;
        Tags?: EC2TagList;
    }

    export interface EC2DeleteVolumeRequest {
        DryRun?: EC2Boolean;
        VolumeId: EC2String;
    }

    export interface EC2DeleteVpcEndpointsRequest {
        DryRun?: EC2Boolean;
        VpcEndpointIds: EC2ValueStringList;
    }

    export interface EC2DeleteVpcEndpointsResult {
        Unsuccessful?: EC2UnsuccessfulItemSet;
    }

    export interface EC2DeleteVpcPeeringConnectionRequest {
        DryRun?: EC2Boolean;
        VpcPeeringConnectionId: EC2String;
    }

    export interface EC2DeleteVpcPeeringConnectionResult {
        Return?: EC2Boolean;
    }

    export interface EC2DeleteVpcRequest {
        DryRun?: EC2Boolean;
        VpcId: EC2String;
    }

    export interface EC2DeleteVpnConnectionRequest {
        DryRun?: EC2Boolean;
        VpnConnectionId: EC2String;
    }

    export interface EC2DeleteVpnConnectionRouteRequest {
        VpnConnectionId: EC2String;
        DestinationCidrBlock: EC2String;
    }

    export interface EC2DeleteVpnGatewayRequest {
        DryRun?: EC2Boolean;
        VpnGatewayId: EC2String;
    }

    export interface EC2DeregisterImageRequest {
        DryRun?: EC2Boolean;
        ImageId: EC2String;
    }

    export interface EC2DescribeAccountAttributesRequest {
        DryRun?: EC2Boolean;
        AttributeNames?: EC2AccountAttributeNameStringList;
    }

    export interface EC2DescribeAccountAttributesResult {
        AccountAttributes?: EC2AccountAttributeList;
    }

    export interface EC2DescribeAddressesRequest {
        DryRun?: EC2Boolean;
        PublicIps?: EC2PublicIpStringList;
        Filters?: EC2FilterList;
        AllocationIds?: EC2AllocationIdList;
    }

    export interface EC2DescribeAddressesResult {
        Addresses?: EC2AddressList;
    }

    export interface EC2DescribeAvailabilityZonesRequest {
        DryRun?: EC2Boolean;
        ZoneNames?: EC2ZoneNameStringList;
        Filters?: EC2FilterList;
    }

    export interface EC2DescribeAvailabilityZonesResult {
        AvailabilityZones?: EC2AvailabilityZoneList;
    }

    export interface EC2DescribeBundleTasksRequest {
        DryRun?: EC2Boolean;
        BundleIds?: EC2BundleIdStringList;
        Filters?: EC2FilterList;
    }

    export interface EC2DescribeBundleTasksResult {
        BundleTasks?: EC2BundleTaskList;
    }

    export interface EC2DescribeClassicLinkInstancesRequest {
        DryRun?: EC2Boolean;
        InstanceIds?: EC2InstanceIdStringList;
        Filters?: EC2FilterList;
        NextToken?: EC2String;
        MaxResults?: EC2Integer;
    }

    export interface EC2DescribeClassicLinkInstancesResult {
        Instances?: EC2ClassicLinkInstanceList;
        NextToken?: EC2String;
    }

    export type EC2DescribeConversionTaskList = Array<EC2ConversionTask>;
    export interface EC2DescribeConversionTasksRequest {
        DryRun?: EC2Boolean;
        Filters?: EC2FilterList;
        ConversionTaskIds?: EC2ConversionIdStringList;
    }

    export interface EC2DescribeConversionTasksResult {
        ConversionTasks?: EC2DescribeConversionTaskList;
    }

    export interface EC2DescribeCustomerGatewaysRequest {
        DryRun?: EC2Boolean;
        CustomerGatewayIds?: EC2CustomerGatewayIdStringList;
        Filters?: EC2FilterList;
    }

    export interface EC2DescribeCustomerGatewaysResult {
        CustomerGateways?: EC2CustomerGatewayList;
    }

    export interface EC2DescribeDhcpOptionsRequest {
        DryRun?: EC2Boolean;
        DhcpOptionsIds?: EC2DhcpOptionsIdStringList;
        Filters?: EC2FilterList;
    }

    export interface EC2DescribeDhcpOptionsResult {
        DhcpOptions?: EC2DhcpOptionsList;
    }

    export interface EC2DescribeExportTasksRequest {
        ExportTaskIds?: EC2ExportTaskIdStringList;
    }

    export interface EC2DescribeExportTasksResult {
        ExportTasks?: EC2ExportTaskList;
    }

    export interface EC2DescribeImageAttributeRequest {
        DryRun?: EC2Boolean;
        ImageId: EC2String;
        Attribute: EC2ImageAttributeName;
    }

    export interface EC2DescribeImagesRequest {
        DryRun?: EC2Boolean;
        ImageIds?: EC2ImageIdStringList;
        Owners?: EC2OwnerStringList;
        ExecutableUsers?: EC2ExecutableByStringList;
        Filters?: EC2FilterList;
    }

    export interface EC2DescribeImagesResult {
        Images?: EC2ImageList;
    }

    export interface EC2DescribeImportImageTasksRequest {
        DryRun?: EC2Boolean;
        ImportTaskIds?: EC2ImportTaskIdList;
        NextToken?: EC2String;
        MaxResults?: EC2Integer;
        Filters?: EC2FilterList;
    }

    export interface EC2DescribeImportImageTasksResult {
        ImportImageTasks?: EC2ImportImageTaskList;
        NextToken?: EC2String;
    }

    export interface EC2DescribeImportSnapshotTasksRequest {
        DryRun?: EC2Boolean;
        ImportTaskIds?: EC2ImportTaskIdList;
        NextToken?: EC2String;
        MaxResults?: EC2Integer;
        Filters?: EC2FilterList;
    }

    export interface EC2DescribeImportSnapshotTasksResult {
        ImportSnapshotTasks?: EC2ImportSnapshotTaskList;
        NextToken?: EC2String;
    }

    export interface EC2DescribeInstanceAttributeRequest {
        DryRun?: EC2Boolean;
        InstanceId: EC2String;
        Attribute: EC2InstanceAttributeName;
    }

    export interface EC2DescribeInstanceStatusRequest {
        DryRun?: EC2Boolean;
        InstanceIds?: EC2InstanceIdStringList;
        Filters?: EC2FilterList;
        NextToken?: EC2String;
        MaxResults?: EC2Integer;
        IncludeAllInstances?: EC2Boolean;
    }

    export interface EC2DescribeInstanceStatusResult {
        InstanceStatuses?: EC2InstanceStatusList;
        NextToken?: EC2String;
    }

    export interface EC2DescribeInstancesRequest {
        DryRun?: EC2Boolean;
        InstanceIds?: EC2InstanceIdStringList;
        Filters?: EC2FilterList;
        NextToken?: EC2String;
        MaxResults?: EC2Integer;
    }

    export interface EC2DescribeInstancesResult {
        Reservations?: EC2ReservationList;
        NextToken?: EC2String;
    }

    export interface EC2DescribeInternetGatewaysRequest {
        DryRun?: EC2Boolean;
        InternetGatewayIds?: EC2ValueStringList;
        Filters?: EC2FilterList;
    }

    export interface EC2DescribeInternetGatewaysResult {
        InternetGateways?: EC2InternetGatewayList;
    }

    export interface EC2DescribeKeyPairsRequest {
        DryRun?: EC2Boolean;
        KeyNames?: EC2KeyNameStringList;
        Filters?: EC2FilterList;
    }

    export interface EC2DescribeKeyPairsResult {
        KeyPairs?: EC2KeyPairList;
    }

    export interface EC2DescribeMovingAddressesRequest {
        DryRun?: EC2Boolean;
        PublicIps?: EC2ValueStringList;
        NextToken?: EC2String;
        Filters?: EC2FilterList;
        MaxResults?: EC2Integer;
    }

    export interface EC2DescribeMovingAddressesResult {
        MovingAddressStatuses?: EC2MovingAddressStatusSet;
        NextToken?: EC2String;
    }

    export interface EC2DescribeNetworkAclsRequest {
        DryRun?: EC2Boolean;
        NetworkAclIds?: EC2ValueStringList;
        Filters?: EC2FilterList;
    }

    export interface EC2DescribeNetworkAclsResult {
        NetworkAcls?: EC2NetworkAclList;
    }

    export interface EC2DescribeNetworkInterfaceAttributeRequest {
        DryRun?: EC2Boolean;
        NetworkInterfaceId: EC2String;
        Attribute?: EC2NetworkInterfaceAttribute;
    }

    export interface EC2DescribeNetworkInterfaceAttributeResult {
        NetworkInterfaceId?: EC2String;
        Description?: EC2AttributeValue;
        SourceDestCheck?: EC2AttributeBooleanValue;
        Groups?: EC2GroupIdentifierList;
        Attachment?: EC2NetworkInterfaceAttachment;
    }

    export interface EC2DescribeNetworkInterfacesRequest {
        DryRun?: EC2Boolean;
        NetworkInterfaceIds?: EC2NetworkInterfaceIdList;
        Filters?: EC2FilterList;
    }

    export interface EC2DescribeNetworkInterfacesResult {
        NetworkInterfaces?: EC2NetworkInterfaceList;
    }

    export interface EC2DescribePlacementGroupsRequest {
        DryRun?: EC2Boolean;
        GroupNames?: EC2PlacementGroupStringList;
        Filters?: EC2FilterList;
    }

    export interface EC2DescribePlacementGroupsResult {
        PlacementGroups?: EC2PlacementGroupList;
    }

    export interface EC2DescribePrefixListsRequest {
        DryRun?: EC2Boolean;
        PrefixListIds?: EC2ValueStringList;
        Filters?: EC2FilterList;
        MaxResults?: EC2Integer;
        NextToken?: EC2String;
    }

    export interface EC2DescribePrefixListsResult {
        PrefixLists?: EC2PrefixListSet;
        NextToken?: EC2String;
    }

    export interface EC2DescribeRegionsRequest {
        DryRun?: EC2Boolean;
        RegionNames?: EC2RegionNameStringList;
        Filters?: EC2FilterList;
    }

    export interface EC2DescribeRegionsResult {
        Regions?: EC2RegionList;
    }

    export interface EC2DescribeReservedInstancesListingsRequest {
        ReservedInstancesId?: EC2String;
        ReservedInstancesListingId?: EC2String;
        Filters?: EC2FilterList;
    }

    export interface EC2DescribeReservedInstancesListingsResult {
        ReservedInstancesListings?: EC2ReservedInstancesListingList;
    }

    export interface EC2DescribeReservedInstancesModificationsRequest {
        ReservedInstancesModificationIds?: EC2ReservedInstancesModificationIdStringList;
        NextToken?: EC2String;
        Filters?: EC2FilterList;
    }

    export interface EC2DescribeReservedInstancesModificationsResult {
        ReservedInstancesModifications?: EC2ReservedInstancesModificationList;
        NextToken?: EC2String;
    }

    export interface EC2DescribeReservedInstancesOfferingsRequest {
        DryRun?: EC2Boolean;
        ReservedInstancesOfferingIds?: EC2ReservedInstancesOfferingIdStringList;
        InstanceType?: EC2InstanceType;
        AvailabilityZone?: EC2String;
        ProductDescription?: EC2RIProductDescription;
        Filters?: EC2FilterList;
        InstanceTenancy?: EC2Tenancy;
        OfferingType?: EC2OfferingTypeValues;
        NextToken?: EC2String;
        MaxResults?: EC2Integer;
        IncludeMarketplace?: EC2Boolean;
        MinDuration?: EC2Long;
        MaxDuration?: EC2Long;
        MaxInstanceCount?: EC2Integer;
    }

    export interface EC2DescribeReservedInstancesOfferingsResult {
        ReservedInstancesOfferings?: EC2ReservedInstancesOfferingList;
        NextToken?: EC2String;
    }

    export interface EC2DescribeReservedInstancesRequest {
        DryRun?: EC2Boolean;
        ReservedInstancesIds?: EC2ReservedInstancesIdStringList;
        Filters?: EC2FilterList;
        OfferingType?: EC2OfferingTypeValues;
    }

    export interface EC2DescribeReservedInstancesResult {
        ReservedInstances?: EC2ReservedInstancesList;
    }

    export interface EC2DescribeRouteTablesRequest {
        DryRun?: EC2Boolean;
        RouteTableIds?: EC2ValueStringList;
        Filters?: EC2FilterList;
    }

    export interface EC2DescribeRouteTablesResult {
        RouteTables?: EC2RouteTableList;
    }

    export interface EC2DescribeSecurityGroupsRequest {
        DryRun?: EC2Boolean;
        GroupNames?: EC2GroupNameStringList;
        GroupIds?: EC2GroupIdStringList;
        Filters?: EC2FilterList;
    }

    export interface EC2DescribeSecurityGroupsResult {
        SecurityGroups?: EC2SecurityGroupList;
    }

    export interface EC2DescribeSnapshotAttributeRequest {
        DryRun?: EC2Boolean;
        SnapshotId: EC2String;
        Attribute: EC2SnapshotAttributeName;
    }

    export interface EC2DescribeSnapshotAttributeResult {
        SnapshotId?: EC2String;
        CreateVolumePermissions?: EC2CreateVolumePermissionList;
        ProductCodes?: EC2ProductCodeList;
    }

    export interface EC2DescribeSnapshotsRequest {
        DryRun?: EC2Boolean;
        SnapshotIds?: EC2SnapshotIdStringList;
        OwnerIds?: EC2OwnerStringList;
        RestorableByUserIds?: EC2RestorableByStringList;
        Filters?: EC2FilterList;
        NextToken?: EC2String;
        MaxResults?: EC2Integer;
    }

    export interface EC2DescribeSnapshotsResult {
        Snapshots?: EC2SnapshotList;
        NextToken?: EC2String;
    }

    export interface EC2DescribeSpotDatafeedSubscriptionRequest {
        DryRun?: EC2Boolean;
    }

    export interface EC2DescribeSpotDatafeedSubscriptionResult {
        SpotDatafeedSubscription?: EC2SpotDatafeedSubscription;
    }

    export interface EC2DescribeSpotFleetInstancesRequest {
        DryRun?: EC2Boolean;
        SpotFleetRequestId: EC2String;
        NextToken?: EC2String;
        MaxResults?: EC2Integer;
    }

    export interface EC2DescribeSpotFleetInstancesResponse {
        SpotFleetRequestId: EC2String;
        ActiveInstances: EC2ActiveInstanceSet;
        NextToken?: EC2String;
    }

    export interface EC2DescribeSpotFleetRequestHistoryRequest {
        DryRun?: EC2Boolean;
        SpotFleetRequestId: EC2String;
        EventType?: EC2EventType;
        StartTime: EC2DateTime;
        NextToken?: EC2String;
        MaxResults?: EC2Integer;
    }

    export interface EC2DescribeSpotFleetRequestHistoryResponse {
        SpotFleetRequestId: EC2String;
        StartTime: EC2DateTime;
        LastEvaluatedTime: EC2DateTime;
        HistoryRecords: EC2HistoryRecords;
        NextToken?: EC2String;
    }

    export interface EC2DescribeSpotFleetRequestsRequest {
        DryRun?: EC2Boolean;
        SpotFleetRequestIds?: EC2ValueStringList;
        NextToken?: EC2String;
        MaxResults?: EC2Integer;
    }

    export interface EC2DescribeSpotFleetRequestsResponse {
        SpotFleetRequestConfigs: EC2SpotFleetRequestConfigSet;
        NextToken?: EC2String;
    }

    export interface EC2DescribeSpotInstanceRequestsRequest {
        DryRun?: EC2Boolean;
        SpotInstanceRequestIds?: EC2SpotInstanceRequestIdList;
        Filters?: EC2FilterList;
    }

    export interface EC2DescribeSpotInstanceRequestsResult {
        SpotInstanceRequests?: EC2SpotInstanceRequestList;
    }

    export interface EC2DescribeSpotPriceHistoryRequest {
        DryRun?: EC2Boolean;
        StartTime?: EC2DateTime;
        EndTime?: EC2DateTime;
        InstanceTypes?: EC2InstanceTypeList;
        ProductDescriptions?: EC2ProductDescriptionList;
        Filters?: EC2FilterList;
        AvailabilityZone?: EC2String;
        MaxResults?: EC2Integer;
        NextToken?: EC2String;
    }

    export interface EC2DescribeSpotPriceHistoryResult {
        SpotPriceHistory?: EC2SpotPriceHistoryList;
        NextToken?: EC2String;
    }

    export interface EC2DescribeSubnetsRequest {
        DryRun?: EC2Boolean;
        SubnetIds?: EC2SubnetIdStringList;
        Filters?: EC2FilterList;
    }

    export interface EC2DescribeSubnetsResult {
        Subnets?: EC2SubnetList;
    }

    export interface EC2DescribeTagsRequest {
        DryRun?: EC2Boolean;
        Filters?: EC2FilterList;
        MaxResults?: EC2Integer;
        NextToken?: EC2String;
    }

    export interface EC2DescribeTagsResult {
        Tags?: EC2TagDescriptionList;
        NextToken?: EC2String;
    }

    export interface EC2DescribeVolumeAttributeRequest {
        DryRun?: EC2Boolean;
        VolumeId: EC2String;
        Attribute?: EC2VolumeAttributeName;
    }

    export interface EC2DescribeVolumeAttributeResult {
        VolumeId?: EC2String;
        AutoEnableIO?: EC2AttributeBooleanValue;
        ProductCodes?: EC2ProductCodeList;
    }

    export interface EC2DescribeVolumeStatusRequest {
        DryRun?: EC2Boolean;
        VolumeIds?: EC2VolumeIdStringList;
        Filters?: EC2FilterList;
        NextToken?: EC2String;
        MaxResults?: EC2Integer;
    }

    export interface EC2DescribeVolumeStatusResult {
        VolumeStatuses?: EC2VolumeStatusList;
        NextToken?: EC2String;
    }

    export interface EC2DescribeVolumesRequest {
        DryRun?: EC2Boolean;
        VolumeIds?: EC2VolumeIdStringList;
        Filters?: EC2FilterList;
        NextToken?: EC2String;
        MaxResults?: EC2Integer;
    }

    export interface EC2DescribeVolumesResult {
        Volumes?: EC2VolumeList;
        NextToken?: EC2String;
    }

    export interface EC2DescribeVpcAttributeRequest {
        DryRun?: EC2Boolean;
        VpcId: EC2String;
        Attribute?: EC2VpcAttributeName;
    }

    export interface EC2DescribeVpcAttributeResult {
        VpcId?: EC2String;
        EnableDnsSupport?: EC2AttributeBooleanValue;
        EnableDnsHostnames?: EC2AttributeBooleanValue;
    }

    export interface EC2DescribeVpcClassicLinkRequest {
        DryRun?: EC2Boolean;
        VpcIds?: EC2VpcClassicLinkIdList;
        Filters?: EC2FilterList;
    }

    export interface EC2DescribeVpcClassicLinkResult {
        Vpcs?: EC2VpcClassicLinkList;
    }

    export interface EC2DescribeVpcEndpointServicesRequest {
        DryRun?: EC2Boolean;
        MaxResults?: EC2Integer;
        NextToken?: EC2String;
    }

    export interface EC2DescribeVpcEndpointServicesResult {
        ServiceNames?: EC2ValueStringList;
        NextToken?: EC2String;
    }

    export interface EC2DescribeVpcEndpointsRequest {
        DryRun?: EC2Boolean;
        VpcEndpointIds?: EC2ValueStringList;
        Filters?: EC2FilterList;
        MaxResults?: EC2Integer;
        NextToken?: EC2String;
    }

    export interface EC2DescribeVpcEndpointsResult {
        VpcEndpoints?: EC2VpcEndpointSet;
        NextToken?: EC2String;
    }

    export interface EC2DescribeVpcPeeringConnectionsRequest {
        DryRun?: EC2Boolean;
        VpcPeeringConnectionIds?: EC2ValueStringList;
        Filters?: EC2FilterList;
    }

    export interface EC2DescribeVpcPeeringConnectionsResult {
        VpcPeeringConnections?: EC2VpcPeeringConnectionList;
    }

    export interface EC2DescribeVpcsRequest {
        DryRun?: EC2Boolean;
        VpcIds?: EC2VpcIdStringList;
        Filters?: EC2FilterList;
    }

    export interface EC2DescribeVpcsResult {
        Vpcs?: EC2VpcList;
    }

    export interface EC2DescribeVpnConnectionsRequest {
        DryRun?: EC2Boolean;
        VpnConnectionIds?: EC2VpnConnectionIdStringList;
        Filters?: EC2FilterList;
    }

    export interface EC2DescribeVpnConnectionsResult {
        VpnConnections?: EC2VpnConnectionList;
    }

    export interface EC2DescribeVpnGatewaysRequest {
        DryRun?: EC2Boolean;
        VpnGatewayIds?: EC2VpnGatewayIdStringList;
        Filters?: EC2FilterList;
    }

    export interface EC2DescribeVpnGatewaysResult {
        VpnGateways?: EC2VpnGatewayList;
    }

    export interface EC2DetachClassicLinkVpcRequest {
        DryRun?: EC2Boolean;
        InstanceId: EC2String;
        VpcId: EC2String;
    }

    export interface EC2DetachClassicLinkVpcResult {
        Return?: EC2Boolean;
    }

    export interface EC2DetachInternetGatewayRequest {
        DryRun?: EC2Boolean;
        InternetGatewayId: EC2String;
        VpcId: EC2String;
    }

    export interface EC2DetachNetworkInterfaceRequest {
        DryRun?: EC2Boolean;
        AttachmentId: EC2String;
        Force?: EC2Boolean;
    }

    export interface EC2DetachVolumeRequest {
        DryRun?: EC2Boolean;
        VolumeId: EC2String;
        InstanceId?: EC2String;
        Device?: EC2String;
        Force?: EC2Boolean;
    }

    export interface EC2DetachVpnGatewayRequest {
        DryRun?: EC2Boolean;
        VpnGatewayId: EC2String;
        VpcId: EC2String;
    }

    export type EC2DeviceType = string;
    export interface EC2DhcpConfiguration {
        Key?: EC2String;
        Values?: EC2DhcpConfigurationValueList;
    }

    export type EC2DhcpConfigurationList = Array<EC2DhcpConfiguration>;
    export interface EC2DhcpOptions {
        DhcpOptionsId?: EC2String;
        DhcpConfigurations?: EC2DhcpConfigurationList;
        Tags?: EC2TagList;
    }

    export type EC2DhcpOptionsIdStringList = Array<EC2String>;
    export type EC2DhcpOptionsList = Array<EC2DhcpOptions>;
    export interface EC2DisableVgwRoutePropagationRequest {
        RouteTableId: EC2String;
        GatewayId: EC2String;
    }

    export interface EC2DisableVpcClassicLinkRequest {
        DryRun?: EC2Boolean;
        VpcId: EC2String;
    }

    export interface EC2DisableVpcClassicLinkResult {
        Return?: EC2Boolean;
    }

    export interface EC2DisassociateAddressRequest {
        DryRun?: EC2Boolean;
        PublicIp?: EC2String;
        AssociationId?: EC2String;
    }

    export interface EC2DisassociateRouteTableRequest {
        DryRun?: EC2Boolean;
        AssociationId: EC2String;
    }

    export interface EC2DiskImage {
        Image?: EC2DiskImageDetail;
        Description?: EC2String;
        Volume?: EC2VolumeDetail;
    }

    export interface EC2DiskImageDescription {
        Format: EC2DiskImageFormat;
        Size: EC2Long;
        ImportManifestUrl: EC2String;
        Checksum?: EC2String;
    }

    export interface EC2DiskImageDetail {
        Format: EC2DiskImageFormat;
        Bytes: EC2Long;
        ImportManifestUrl: EC2String;
    }

    export type EC2DiskImageFormat = string;
    export type EC2DiskImageList = Array<EC2DiskImage>;
    export interface EC2DiskImageVolumeDescription {
        Size?: EC2Long;
        Id: EC2String;
    }

    export type EC2DomainType = string;
    export type EC2Double = number;
    export interface EC2EbsBlockDevice {
        SnapshotId?: EC2String;
        VolumeSize?: EC2Integer;
        DeleteOnTermination?: EC2Boolean;
        VolumeType?: EC2VolumeType;
        Iops?: EC2Integer;
        Encrypted?: EC2Boolean;
    }

    export interface EC2EbsInstanceBlockDevice {
        VolumeId?: EC2String;
        Status?: EC2AttachmentStatus;
        AttachTime?: EC2DateTime;
        DeleteOnTermination?: EC2Boolean;
    }

    export interface EC2EbsInstanceBlockDeviceSpecification {
        VolumeId?: EC2String;
        DeleteOnTermination?: EC2Boolean;
    }

    export interface EC2EnableVgwRoutePropagationRequest {
        RouteTableId: EC2String;
        GatewayId: EC2String;
    }

    export interface EC2EnableVolumeIORequest {
        DryRun?: EC2Boolean;
        VolumeId: EC2String;
    }

    export interface EC2EnableVpcClassicLinkRequest {
        DryRun?: EC2Boolean;
        VpcId: EC2String;
    }

    export interface EC2EnableVpcClassicLinkResult {
        Return?: EC2Boolean;
    }

    export type EC2EventCode = string;
    export interface EC2EventInformation {
        InstanceId?: EC2String;
        EventSubType?: EC2String;
        EventDescription?: EC2String;
    }

    export type EC2EventType = string;
    export type EC2ExecutableByStringList = Array<EC2String>;
    export type EC2ExportEnvironment = string;
    export interface EC2ExportTask {
        ExportTaskId?: EC2String;
        Description?: EC2String;
        State?: EC2ExportTaskState;
        StatusMessage?: EC2String;
        InstanceExportDetails?: EC2InstanceExportDetails;
        ExportToS3Task?: EC2ExportToS3Task;
    }

    export type EC2ExportTaskIdStringList = Array<EC2String>;
    export type EC2ExportTaskList = Array<EC2ExportTask>;
    export type EC2ExportTaskState = string;
    export interface EC2ExportToS3Task {
        DiskImageFormat?: EC2DiskImageFormat;
        ContainerFormat?: EC2ContainerFormat;
        S3Bucket?: EC2String;
        S3Key?: EC2String;
    }

    export interface EC2ExportToS3TaskSpecification {
        DiskImageFormat?: EC2DiskImageFormat;
        ContainerFormat?: EC2ContainerFormat;
        S3Bucket?: EC2String;
        S3Prefix?: EC2String;
    }

    export interface EC2Filter {
        Name?: EC2String;
        Values?: EC2ValueStringList;
    }

    export type EC2FilterList = Array<EC2Filter>;
    export type EC2Float = number;
    export type EC2GatewayType = string;
    export interface EC2GetConsoleOutputRequest {
        DryRun?: EC2Boolean;
        InstanceId: EC2String;
    }

    export interface EC2GetConsoleOutputResult {
        InstanceId?: EC2String;
        Timestamp?: EC2DateTime;
        Output?: EC2String;
    }

    export interface EC2GetPasswordDataRequest {
        DryRun?: EC2Boolean;
        InstanceId: EC2String;
    }

    export interface EC2GetPasswordDataResult {
        InstanceId?: EC2String;
        Timestamp?: EC2DateTime;
        PasswordData?: EC2String;
    }

    export type EC2GroupIdStringList = Array<EC2String>;
    export interface EC2GroupIdentifier {
        GroupName?: EC2String;
        GroupId?: EC2String;
    }

    export type EC2GroupIdentifierList = Array<EC2GroupIdentifier>;
    export type EC2GroupNameStringList = Array<EC2String>;
    export interface EC2HistoryRecord {
        Timestamp: EC2DateTime;
        EventType: EC2EventType;
        EventInformation: EC2EventInformation;
    }

    export type EC2HistoryRecords = Array<EC2HistoryRecord>;
    export type EC2HypervisorType = string;
    export interface EC2IamInstanceProfile {
        Arn?: EC2String;
        Id?: EC2String;
    }

    export interface EC2IamInstanceProfileSpecification {
        Arn?: EC2String;
        Name?: EC2String;
    }

    export interface EC2IcmpTypeCode {
        Type?: EC2Integer;
        Code?: EC2Integer;
    }

    export interface EC2Image {
        ImageId?: EC2String;
        ImageLocation?: EC2String;
        State?: EC2ImageState;
        OwnerId?: EC2String;
        CreationDate?: EC2String;
        Public?: EC2Boolean;
        ProductCodes?: EC2ProductCodeList;
        Architecture?: EC2ArchitectureValues;
        ImageType?: EC2ImageTypeValues;
        KernelId?: EC2String;
        RamdiskId?: EC2String;
        Platform?: EC2PlatformValues;
        SriovNetSupport?: EC2String;
        StateReason?: EC2StateReason;
        ImageOwnerAlias?: EC2String;
        Name?: EC2String;
        Description?: EC2String;
        RootDeviceType?: EC2DeviceType;
        RootDeviceName?: EC2String;
        BlockDeviceMappings?: EC2BlockDeviceMappingList;
        VirtualizationType?: EC2VirtualizationType;
        Tags?: EC2TagList;
        Hypervisor?: EC2HypervisorType;
    }

    export interface EC2ImageAttribute {
        ImageId?: EC2String;
        LaunchPermissions?: EC2LaunchPermissionList;
        ProductCodes?: EC2ProductCodeList;
        KernelId?: EC2AttributeValue;
        RamdiskId?: EC2AttributeValue;
        Description?: EC2AttributeValue;
        SriovNetSupport?: EC2AttributeValue;
        BlockDeviceMappings?: EC2BlockDeviceMappingList;
    }

    export type EC2ImageAttributeName = string;
    export interface EC2ImageDiskContainer {
        Description?: EC2String;
        Format?: EC2String;
        Url?: EC2String;
        UserBucket?: EC2UserBucket;
        DeviceName?: EC2String;
        SnapshotId?: EC2String;
    }

    export type EC2ImageDiskContainerList = Array<EC2ImageDiskContainer>;
    export type EC2ImageIdStringList = Array<EC2String>;
    export type EC2ImageList = Array<EC2Image>;
    export type EC2ImageState = string;
    export type EC2ImageTypeValues = string;
    export interface EC2ImportImageRequest {
        DryRun?: EC2Boolean;
        Description?: EC2String;
        DiskContainers?: EC2ImageDiskContainerList;
        LicenseType?: EC2String;
        Hypervisor?: EC2String;
        Architecture?: EC2String;
        Platform?: EC2String;
        ClientData?: EC2ClientData;
        ClientToken?: EC2String;
        RoleName?: EC2String;
    }

    export interface EC2ImportImageResult {
        ImportTaskId?: EC2String;
        Architecture?: EC2String;
        LicenseType?: EC2String;
        Platform?: EC2String;
        Hypervisor?: EC2String;
        Description?: EC2String;
        SnapshotDetails?: EC2SnapshotDetailList;
        ImageId?: EC2String;
        Progress?: EC2String;
        StatusMessage?: EC2String;
        Status?: EC2String;
    }

    export interface EC2ImportImageTask {
        ImportTaskId?: EC2String;
        Architecture?: EC2String;
        LicenseType?: EC2String;
        Platform?: EC2String;
        Hypervisor?: EC2String;
        Description?: EC2String;
        SnapshotDetails?: EC2SnapshotDetailList;
        ImageId?: EC2String;
        Progress?: EC2String;
        StatusMessage?: EC2String;
        Status?: EC2String;
    }

    export type EC2ImportImageTaskList = Array<EC2ImportImageTask>;
    export interface EC2ImportInstanceLaunchSpecification {
        Architecture?: EC2ArchitectureValues;
        GroupNames?: EC2SecurityGroupStringList;
        GroupIds?: EC2SecurityGroupIdStringList;
        AdditionalInfo?: EC2String;
        UserData?: EC2UserData;
        InstanceType?: EC2InstanceType;
        Placement?: EC2Placement;
        Monitoring?: EC2Boolean;
        SubnetId?: EC2String;
        InstanceInitiatedShutdownBehavior?: EC2ShutdownBehavior;
        PrivateIpAddress?: EC2String;
    }

    export interface EC2ImportInstanceRequest {
        DryRun?: EC2Boolean;
        Description?: EC2String;
        LaunchSpecification?: EC2ImportInstanceLaunchSpecification;
        DiskImages?: EC2DiskImageList;
        Platform: EC2PlatformValues;
    }

    export interface EC2ImportInstanceResult {
        ConversionTask?: EC2ConversionTask;
    }

    export interface EC2ImportInstanceTaskDetails {
        Volumes: EC2ImportInstanceVolumeDetailSet;
        InstanceId?: EC2String;
        Platform?: EC2PlatformValues;
        Description?: EC2String;
    }

    export interface EC2ImportInstanceVolumeDetailItem {
        BytesConverted: EC2Long;
        AvailabilityZone: EC2String;
        Image: EC2DiskImageDescription;
        Volume: EC2DiskImageVolumeDescription;
        Status: EC2String;
        StatusMessage?: EC2String;
        Description?: EC2String;
    }

    export type EC2ImportInstanceVolumeDetailSet = Array<EC2ImportInstanceVolumeDetailItem>;
    export interface EC2ImportKeyPairRequest {
        DryRun?: EC2Boolean;
        KeyName: EC2String;
        PublicKeyMaterial: EC2Blob;
    }

    export interface EC2ImportKeyPairResult {
        KeyName?: EC2String;
        KeyFingerprint?: EC2String;
    }

    export interface EC2ImportSnapshotRequest {
        DryRun?: EC2Boolean;
        Description?: EC2String;
        DiskContainer?: EC2SnapshotDiskContainer;
        ClientData?: EC2ClientData;
        ClientToken?: EC2String;
        RoleName?: EC2String;
    }

    export interface EC2ImportSnapshotResult {
        ImportTaskId?: EC2String;
        SnapshotTaskDetail?: EC2SnapshotTaskDetail;
        Description?: EC2String;
    }

    export interface EC2ImportSnapshotTask {
        ImportTaskId?: EC2String;
        SnapshotTaskDetail?: EC2SnapshotTaskDetail;
        Description?: EC2String;
    }

    export type EC2ImportSnapshotTaskList = Array<EC2ImportSnapshotTask>;
    export type EC2ImportTaskIdList = Array<EC2String>;
    export interface EC2ImportVolumeRequest {
        DryRun?: EC2Boolean;
        AvailabilityZone: EC2String;
        Image: EC2DiskImageDetail;
        Description?: EC2String;
        Volume: EC2VolumeDetail;
    }

    export interface EC2ImportVolumeResult {
        ConversionTask?: EC2ConversionTask;
    }

    export interface EC2ImportVolumeTaskDetails {
        BytesConverted: EC2Long;
        AvailabilityZone: EC2String;
        Description?: EC2String;
        Image: EC2DiskImageDescription;
        Volume: EC2DiskImageVolumeDescription;
    }

    export interface EC2Instance {
        InstanceId?: EC2String;
        ImageId?: EC2String;
        State?: EC2InstanceState;
        PrivateDnsName?: EC2String;
        PublicDnsName?: EC2String;
        StateTransitionReason?: EC2String;
        KeyName?: EC2String;
        AmiLaunchIndex?: EC2Integer;
        ProductCodes?: EC2ProductCodeList;
        InstanceType?: EC2InstanceType;
        LaunchTime?: EC2DateTime;
        Placement?: EC2Placement;
        KernelId?: EC2String;
        RamdiskId?: EC2String;
        Platform?: EC2PlatformValues;
        Monitoring?: EC2Monitoring;
        SubnetId?: EC2String;
        VpcId?: EC2String;
        PrivateIpAddress?: EC2String;
        PublicIpAddress?: EC2String;
        StateReason?: EC2StateReason;
        Architecture?: EC2ArchitectureValues;
        RootDeviceType?: EC2DeviceType;
        RootDeviceName?: EC2String;
        BlockDeviceMappings?: EC2InstanceBlockDeviceMappingList;
        VirtualizationType?: EC2VirtualizationType;
        InstanceLifecycle?: EC2InstanceLifecycleType;
        SpotInstanceRequestId?: EC2String;
        ClientToken?: EC2String;
        Tags?: EC2TagList;
        SecurityGroups?: EC2GroupIdentifierList;
        SourceDestCheck?: EC2Boolean;
        Hypervisor?: EC2HypervisorType;
        NetworkInterfaces?: EC2InstanceNetworkInterfaceList;
        IamInstanceProfile?: EC2IamInstanceProfile;
        EbsOptimized?: EC2Boolean;
        SriovNetSupport?: EC2String;
    }

    export interface EC2InstanceAttribute {
        InstanceId?: EC2String;
        InstanceType?: EC2AttributeValue;
        KernelId?: EC2AttributeValue;
        RamdiskId?: EC2AttributeValue;
        UserData?: EC2AttributeValue;
        DisableApiTermination?: EC2AttributeBooleanValue;
        InstanceInitiatedShutdownBehavior?: EC2AttributeValue;
        RootDeviceName?: EC2AttributeValue;
        BlockDeviceMappings?: EC2InstanceBlockDeviceMappingList;
        ProductCodes?: EC2ProductCodeList;
        EbsOptimized?: EC2AttributeBooleanValue;
        SriovNetSupport?: EC2AttributeValue;
        SourceDestCheck?: EC2AttributeBooleanValue;
        Groups?: EC2GroupIdentifierList;
    }

    export type EC2InstanceAttributeName = string;
    export interface EC2InstanceBlockDeviceMapping {
        DeviceName?: EC2String;
        Ebs?: EC2EbsInstanceBlockDevice;
    }

    export type EC2InstanceBlockDeviceMappingList = Array<EC2InstanceBlockDeviceMapping>;
    export interface EC2InstanceBlockDeviceMappingSpecification {
        DeviceName?: EC2String;
        Ebs?: EC2EbsInstanceBlockDeviceSpecification;
        VirtualName?: EC2String;
        NoDevice?: EC2String;
    }

    export type EC2InstanceBlockDeviceMappingSpecificationList = Array<EC2InstanceBlockDeviceMappingSpecification>;
    export interface EC2InstanceCount {
        State?: EC2ListingState;
        InstanceCount?: EC2Integer;
    }

    export type EC2InstanceCountList = Array<EC2InstanceCount>;
    export interface EC2InstanceExportDetails {
        InstanceId?: EC2String;
        TargetEnvironment?: EC2ExportEnvironment;
    }

    export type EC2InstanceIdStringList = Array<EC2String>;
    export type EC2InstanceLifecycleType = string;
    export type EC2InstanceList = Array<EC2Instance>;
    export interface EC2InstanceMonitoring {
        InstanceId?: EC2String;
        Monitoring?: EC2Monitoring;
    }

    export type EC2InstanceMonitoringList = Array<EC2InstanceMonitoring>;
    export interface EC2InstanceNetworkInterface {
        NetworkInterfaceId?: EC2String;
        SubnetId?: EC2String;
        VpcId?: EC2String;
        Description?: EC2String;
        OwnerId?: EC2String;
        Status?: EC2NetworkInterfaceStatus;
        MacAddress?: EC2String;
        PrivateIpAddress?: EC2String;
        PrivateDnsName?: EC2String;
        SourceDestCheck?: EC2Boolean;
        Groups?: EC2GroupIdentifierList;
        Attachment?: EC2InstanceNetworkInterfaceAttachment;
        Association?: EC2InstanceNetworkInterfaceAssociation;
        PrivateIpAddresses?: EC2InstancePrivateIpAddressList;
    }

    export interface EC2InstanceNetworkInterfaceAssociation {
        PublicIp?: EC2String;
        PublicDnsName?: EC2String;
        IpOwnerId?: EC2String;
    }

    export interface EC2InstanceNetworkInterfaceAttachment {
        AttachmentId?: EC2String;
        DeviceIndex?: EC2Integer;
        Status?: EC2AttachmentStatus;
        AttachTime?: EC2DateTime;
        DeleteOnTermination?: EC2Boolean;
    }

    export type EC2InstanceNetworkInterfaceList = Array<EC2InstanceNetworkInterface>;
    export interface EC2InstanceNetworkInterfaceSpecification {
        NetworkInterfaceId?: EC2String;
        DeviceIndex?: EC2Integer;
        SubnetId?: EC2String;
        Description?: EC2String;
        PrivateIpAddress?: EC2String;
        Groups?: EC2SecurityGroupIdStringList;
        DeleteOnTermination?: EC2Boolean;
        PrivateIpAddresses?: EC2PrivateIpAddressSpecificationList;
        SecondaryPrivateIpAddressCount?: EC2Integer;
        AssociatePublicIpAddress?: EC2Boolean;
    }

    export type EC2InstanceNetworkInterfaceSpecificationList = Array<EC2InstanceNetworkInterfaceSpecification>;
    export interface EC2InstancePrivateIpAddress {
        PrivateIpAddress?: EC2String;
        PrivateDnsName?: EC2String;
        Primary?: EC2Boolean;
        Association?: EC2InstanceNetworkInterfaceAssociation;
    }

    export type EC2InstancePrivateIpAddressList = Array<EC2InstancePrivateIpAddress>;
    export interface EC2InstanceState {
        Code?: EC2Integer;
        Name?: EC2InstanceStateName;
    }

    export interface EC2InstanceStateChange {
        InstanceId?: EC2String;
        CurrentState?: EC2InstanceState;
        PreviousState?: EC2InstanceState;
    }

    export type EC2InstanceStateChangeList = Array<EC2InstanceStateChange>;
    export type EC2InstanceStateName = string;
    export interface EC2InstanceStatus {
        InstanceId?: EC2String;
        AvailabilityZone?: EC2String;
        Events?: EC2InstanceStatusEventList;
        InstanceState?: EC2InstanceState;
        SystemStatus?: EC2InstanceStatusSummary;
        InstanceStatus?: EC2InstanceStatusSummary;
    }

    export interface EC2InstanceStatusDetails {
        Name?: EC2StatusName;
        Status?: EC2StatusType;
        ImpairedSince?: EC2DateTime;
    }

    export type EC2InstanceStatusDetailsList = Array<EC2InstanceStatusDetails>;
    export interface EC2InstanceStatusEvent {
        Code?: EC2EventCode;
        Description?: EC2String;
        NotBefore?: EC2DateTime;
        NotAfter?: EC2DateTime;
    }

    export type EC2InstanceStatusEventList = Array<EC2InstanceStatusEvent>;
    export type EC2InstanceStatusList = Array<EC2InstanceStatus>;
    export interface EC2InstanceStatusSummary {
        Status?: EC2SummaryStatus;
        Details?: EC2InstanceStatusDetailsList;
    }

    export type EC2InstanceType = string;
    export type EC2InstanceTypeList = Array<EC2InstanceType>;
    export type EC2Integer = number;
    export interface EC2InternetGateway {
        InternetGatewayId?: EC2String;
        Attachments?: EC2InternetGatewayAttachmentList;
        Tags?: EC2TagList;
    }

    export interface EC2InternetGatewayAttachment {
        VpcId?: EC2String;
        State?: EC2AttachmentStatus;
    }

    export type EC2InternetGatewayAttachmentList = Array<EC2InternetGatewayAttachment>;
    export type EC2InternetGatewayList = Array<EC2InternetGateway>;
    export interface EC2IpPermission {
        IpProtocol?: EC2String;
        FromPort?: EC2Integer;
        ToPort?: EC2Integer;
        UserIdGroupPairs?: EC2UserIdGroupPairList;
        IpRanges?: EC2IpRangeList;
        PrefixListIds?: EC2PrefixListIdList;
    }

    export type EC2IpPermissionList = Array<EC2IpPermission>;
    export interface EC2IpRange {
        CidrIp?: EC2String;
    }

    export type EC2IpRangeList = Array<EC2IpRange>;
    export type EC2KeyNameStringList = Array<EC2String>;
    export interface EC2KeyPair {
        KeyName?: EC2String;
        KeyFingerprint?: EC2String;
        KeyMaterial?: EC2String;
    }

    export interface EC2KeyPairInfo {
        KeyName?: EC2String;
        KeyFingerprint?: EC2String;
    }

    export type EC2KeyPairList = Array<EC2KeyPairInfo>;
    export interface EC2LaunchPermission {
        UserId?: EC2String;
        Group?: EC2PermissionGroup;
    }

    export type EC2LaunchPermissionList = Array<EC2LaunchPermission>;
    export interface EC2LaunchPermissionModifications {
        Add?: EC2LaunchPermissionList;
        Remove?: EC2LaunchPermissionList;
    }

    export interface EC2LaunchSpecification {
        ImageId?: EC2String;
        KeyName?: EC2String;
        SecurityGroups?: EC2GroupIdentifierList;
        UserData?: EC2String;
        AddressingType?: EC2String;
        InstanceType?: EC2InstanceType;
        Placement?: EC2SpotPlacement;
        KernelId?: EC2String;
        RamdiskId?: EC2String;
        BlockDeviceMappings?: EC2BlockDeviceMappingList;
        SubnetId?: EC2String;
        NetworkInterfaces?: EC2InstanceNetworkInterfaceSpecificationList;
        IamInstanceProfile?: EC2IamInstanceProfileSpecification;
        EbsOptimized?: EC2Boolean;
        Monitoring?: EC2RunInstancesMonitoringEnabled;
    }

    export type EC2LaunchSpecsList = Array<EC2LaunchSpecification>;
    export type EC2ListingState = string;
    export type EC2ListingStatus = string;
    export type EC2Long = number;
    export interface EC2ModifyImageAttributeRequest {
        DryRun?: EC2Boolean;
        ImageId: EC2String;
        Attribute?: EC2String;
        OperationType?: EC2String;
        UserIds?: EC2UserIdStringList;
        UserGroups?: EC2UserGroupStringList;
        ProductCodes?: EC2ProductCodeStringList;
        Value?: EC2String;
        LaunchPermission?: EC2LaunchPermissionModifications;
        Description?: EC2AttributeValue;
    }

    export interface EC2ModifyInstanceAttributeRequest {
        DryRun?: EC2Boolean;
        InstanceId: EC2String;
        Attribute?: EC2InstanceAttributeName;
        Value?: EC2String;
        BlockDeviceMappings?: EC2InstanceBlockDeviceMappingSpecificationList;
        SourceDestCheck?: EC2AttributeBooleanValue;
        DisableApiTermination?: EC2AttributeBooleanValue;
        InstanceType?: EC2AttributeValue;
        Kernel?: EC2AttributeValue;
        Ramdisk?: EC2AttributeValue;
        UserData?: EC2BlobAttributeValue;
        InstanceInitiatedShutdownBehavior?: EC2AttributeValue;
        Groups?: EC2GroupIdStringList;
        EbsOptimized?: EC2AttributeBooleanValue;
        SriovNetSupport?: EC2AttributeValue;
    }

    export interface EC2ModifyNetworkInterfaceAttributeRequest {
        DryRun?: EC2Boolean;
        NetworkInterfaceId: EC2String;
        Description?: EC2AttributeValue;
        SourceDestCheck?: EC2AttributeBooleanValue;
        Groups?: EC2SecurityGroupIdStringList;
        Attachment?: EC2NetworkInterfaceAttachmentChanges;
    }

    export interface EC2ModifyReservedInstancesRequest {
        ClientToken?: EC2String;
        ReservedInstancesIds: EC2ReservedInstancesIdStringList;
        TargetConfigurations: EC2ReservedInstancesConfigurationList;
    }

    export interface EC2ModifyReservedInstancesResult {
        ReservedInstancesModificationId?: EC2String;
    }

    export interface EC2ModifySnapshotAttributeRequest {
        DryRun?: EC2Boolean;
        SnapshotId: EC2String;
        Attribute?: EC2SnapshotAttributeName;
        OperationType?: EC2String;
        UserIds?: EC2UserIdStringList;
        GroupNames?: EC2GroupNameStringList;
        CreateVolumePermission?: EC2CreateVolumePermissionModifications;
    }

    export interface EC2ModifySubnetAttributeRequest {
        SubnetId: EC2String;
        MapPublicIpOnLaunch?: EC2AttributeBooleanValue;
    }

    export interface EC2ModifyVolumeAttributeRequest {
        DryRun?: EC2Boolean;
        VolumeId: EC2String;
        AutoEnableIO?: EC2AttributeBooleanValue;
    }

    export interface EC2ModifyVpcAttributeRequest {
        VpcId: EC2String;
        EnableDnsSupport?: EC2AttributeBooleanValue;
        EnableDnsHostnames?: EC2AttributeBooleanValue;
    }

    export interface EC2ModifyVpcEndpointRequest {
        DryRun?: EC2Boolean;
        VpcEndpointId: EC2String;
        ResetPolicy?: EC2Boolean;
        PolicyDocument?: EC2String;
        AddRouteTableIds?: EC2ValueStringList;
        RemoveRouteTableIds?: EC2ValueStringList;
    }

    export interface EC2ModifyVpcEndpointResult {
        Return?: EC2Boolean;
    }

    export interface EC2MonitorInstancesRequest {
        DryRun?: EC2Boolean;
        InstanceIds: EC2InstanceIdStringList;
    }

    export interface EC2MonitorInstancesResult {
        InstanceMonitorings?: EC2InstanceMonitoringList;
    }

    export interface EC2Monitoring {
        State?: EC2MonitoringState;
    }

    export type EC2MonitoringState = string;
    export interface EC2MoveAddressToVpcRequest {
        DryRun?: EC2Boolean;
        PublicIp: EC2String;
    }

    export interface EC2MoveAddressToVpcResult {
        AllocationId?: EC2String;
        Status?: EC2Status;
    }

    export type EC2MoveStatus = string;
    export interface EC2MovingAddressStatus {
        PublicIp?: EC2String;
        MoveStatus?: EC2MoveStatus;
    }

    export type EC2MovingAddressStatusSet = Array<EC2MovingAddressStatus>;
    export interface EC2NetworkAcl {
        NetworkAclId?: EC2String;
        VpcId?: EC2String;
        IsDefault?: EC2Boolean;
        Entries?: EC2NetworkAclEntryList;
        Associations?: EC2NetworkAclAssociationList;
        Tags?: EC2TagList;
    }

    export interface EC2NetworkAclAssociation {
        NetworkAclAssociationId?: EC2String;
        NetworkAclId?: EC2String;
        SubnetId?: EC2String;
    }

    export type EC2NetworkAclAssociationList = Array<EC2NetworkAclAssociation>;
    export interface EC2NetworkAclEntry {
        RuleNumber?: EC2Integer;
        Protocol?: EC2String;
        RuleAction?: EC2RuleAction;
        Egress?: EC2Boolean;
        CidrBlock?: EC2String;
        IcmpTypeCode?: EC2IcmpTypeCode;
        PortRange?: EC2PortRange;
    }

    export type EC2NetworkAclEntryList = Array<EC2NetworkAclEntry>;
    export type EC2NetworkAclList = Array<EC2NetworkAcl>;
    export interface EC2NetworkInterface {
        NetworkInterfaceId?: EC2String;
        SubnetId?: EC2String;
        VpcId?: EC2String;
        AvailabilityZone?: EC2String;
        Description?: EC2String;
        OwnerId?: EC2String;
        RequesterId?: EC2String;
        RequesterManaged?: EC2Boolean;
        Status?: EC2NetworkInterfaceStatus;
        MacAddress?: EC2String;
        PrivateIpAddress?: EC2String;
        PrivateDnsName?: EC2String;
        SourceDestCheck?: EC2Boolean;
        Groups?: EC2GroupIdentifierList;
        Attachment?: EC2NetworkInterfaceAttachment;
        Association?: EC2NetworkInterfaceAssociation;
        TagSet?: EC2TagList;
        PrivateIpAddresses?: EC2NetworkInterfacePrivateIpAddressList;
    }

    export interface EC2NetworkInterfaceAssociation {
        PublicIp?: EC2String;
        PublicDnsName?: EC2String;
        IpOwnerId?: EC2String;
        AllocationId?: EC2String;
        AssociationId?: EC2String;
    }

    export interface EC2NetworkInterfaceAttachment {
        AttachmentId?: EC2String;
        InstanceId?: EC2String;
        InstanceOwnerId?: EC2String;
        DeviceIndex?: EC2Integer;
        Status?: EC2AttachmentStatus;
        AttachTime?: EC2DateTime;
        DeleteOnTermination?: EC2Boolean;
    }

    export interface EC2NetworkInterfaceAttachmentChanges {
        AttachmentId?: EC2String;
        DeleteOnTermination?: EC2Boolean;
    }

    export type EC2NetworkInterfaceAttribute = string;
    export type EC2NetworkInterfaceIdList = Array<EC2String>;
    export type EC2NetworkInterfaceList = Array<EC2NetworkInterface>;
    export interface EC2NetworkInterfacePrivateIpAddress {
        PrivateIpAddress?: EC2String;
        PrivateDnsName?: EC2String;
        Primary?: EC2Boolean;
        Association?: EC2NetworkInterfaceAssociation;
    }

    export type EC2NetworkInterfacePrivateIpAddressList = Array<EC2NetworkInterfacePrivateIpAddress>;
    export type EC2NetworkInterfaceStatus = string;
    export type EC2OfferingTypeValues = string;
    export type EC2OwnerStringList = Array<EC2String>;
    export type EC2PermissionGroup = string;
    export interface EC2Placement {
        AvailabilityZone?: EC2String;
        GroupName?: EC2String;
        Tenancy?: EC2Tenancy;
    }

    export interface EC2PlacementGroup {
        GroupName?: EC2String;
        Strategy?: EC2PlacementStrategy;
        State?: EC2PlacementGroupState;
    }

    export type EC2PlacementGroupList = Array<EC2PlacementGroup>;
    export type EC2PlacementGroupState = string;
    export type EC2PlacementGroupStringList = Array<EC2String>;
    export type EC2PlacementStrategy = string;
    export type EC2PlatformValues = string;
    export interface EC2PortRange {
        From?: EC2Integer;
        To?: EC2Integer;
    }

    export interface EC2PrefixList {
        PrefixListId?: EC2String;
        PrefixListName?: EC2String;
        Cidrs?: EC2ValueStringList;
    }

    export interface EC2PrefixListId {
        PrefixListId?: EC2String;
    }

    export type EC2PrefixListIdList = Array<EC2PrefixListId>;
    export type EC2PrefixListSet = Array<EC2PrefixList>;
    export interface EC2PriceSchedule {
        Term?: EC2Long;
        Price?: EC2Double;
        CurrencyCode?: EC2CurrencyCodeValues;
        Active?: EC2Boolean;
    }

    export type EC2PriceScheduleList = Array<EC2PriceSchedule>;
    export interface EC2PriceScheduleSpecification {
        Term?: EC2Long;
        Price?: EC2Double;
        CurrencyCode?: EC2CurrencyCodeValues;
    }

    export type EC2PriceScheduleSpecificationList = Array<EC2PriceScheduleSpecification>;
    export interface EC2PricingDetail {
        Price?: EC2Double;
        Count?: EC2Integer;
    }

    export type EC2PricingDetailsList = Array<EC2PricingDetail>;
    export interface EC2PrivateIpAddressSpecification {
        PrivateIpAddress: EC2String;
        Primary?: EC2Boolean;
    }

    export type EC2PrivateIpAddressSpecificationList = Array<EC2PrivateIpAddressSpecification>;
    export type EC2PrivateIpAddressStringList = Array<EC2String>;
    export interface EC2ProductCode {
        ProductCodeId?: EC2String;
        ProductCodeType?: EC2ProductCodeValues;
    }

    export type EC2ProductCodeList = Array<EC2ProductCode>;
    export type EC2ProductCodeStringList = Array<EC2String>;
    export type EC2ProductCodeValues = string;
    export type EC2ProductDescriptionList = Array<EC2String>;
    export interface EC2PropagatingVgw {
        GatewayId?: EC2String;
    }

    export type EC2PropagatingVgwList = Array<EC2PropagatingVgw>;
    export type EC2PublicIpStringList = Array<EC2String>;
    export interface EC2PurchaseReservedInstancesOfferingRequest {
        DryRun?: EC2Boolean;
        ReservedInstancesOfferingId: EC2String;
        InstanceCount: EC2Integer;
        LimitPrice?: EC2ReservedInstanceLimitPrice;
    }

    export interface EC2PurchaseReservedInstancesOfferingResult {
        ReservedInstancesId?: EC2String;
    }

    export type EC2RIProductDescription = string;
    export type EC2ReasonCodesList = Array<EC2ReportInstanceReasonCodes>;
    export interface EC2RebootInstancesRequest {
        DryRun?: EC2Boolean;
        InstanceIds: EC2InstanceIdStringList;
    }

    export interface EC2RecurringCharge {
        Frequency?: EC2RecurringChargeFrequency;
        Amount?: EC2Double;
    }

    export type EC2RecurringChargeFrequency = string;
    export type EC2RecurringChargesList = Array<EC2RecurringCharge>;
    export interface EC2Region {
        RegionName?: EC2String;
        Endpoint?: EC2String;
    }

    export type EC2RegionList = Array<EC2Region>;
    export type EC2RegionNameStringList = Array<EC2String>;
    export interface EC2RegisterImageRequest {
        DryRun?: EC2Boolean;
        ImageLocation?: EC2String;
        Name: EC2String;
        Description?: EC2String;
        Architecture?: EC2ArchitectureValues;
        KernelId?: EC2String;
        RamdiskId?: EC2String;
        RootDeviceName?: EC2String;
        BlockDeviceMappings?: EC2BlockDeviceMappingRequestList;
        VirtualizationType?: EC2String;
        SriovNetSupport?: EC2String;
    }

    export interface EC2RegisterImageResult {
        ImageId?: EC2String;
    }

    export interface EC2RejectVpcPeeringConnectionRequest {
        DryRun?: EC2Boolean;
        VpcPeeringConnectionId: EC2String;
    }

    export interface EC2RejectVpcPeeringConnectionResult {
        Return?: EC2Boolean;
    }

    export interface EC2ReleaseAddressRequest {
        DryRun?: EC2Boolean;
        PublicIp?: EC2String;
        AllocationId?: EC2String;
    }

    export interface EC2ReplaceNetworkAclAssociationRequest {
        DryRun?: EC2Boolean;
        AssociationId: EC2String;
        NetworkAclId: EC2String;
    }

    export interface EC2ReplaceNetworkAclAssociationResult {
        NewAssociationId?: EC2String;
    }

    export interface EC2ReplaceNetworkAclEntryRequest {
        DryRun?: EC2Boolean;
        NetworkAclId: EC2String;
        RuleNumber: EC2Integer;
        Protocol: EC2String;
        RuleAction: EC2RuleAction;
        Egress: EC2Boolean;
        CidrBlock: EC2String;
        IcmpTypeCode?: EC2IcmpTypeCode;
        PortRange?: EC2PortRange;
    }

    export interface EC2ReplaceRouteRequest {
        DryRun?: EC2Boolean;
        RouteTableId: EC2String;
        DestinationCidrBlock: EC2String;
        GatewayId?: EC2String;
        InstanceId?: EC2String;
        NetworkInterfaceId?: EC2String;
        VpcPeeringConnectionId?: EC2String;
    }

    export interface EC2ReplaceRouteTableAssociationRequest {
        DryRun?: EC2Boolean;
        AssociationId: EC2String;
        RouteTableId: EC2String;
    }

    export interface EC2ReplaceRouteTableAssociationResult {
        NewAssociationId?: EC2String;
    }

    export type EC2ReportInstanceReasonCodes = string;
    export interface EC2ReportInstanceStatusRequest {
        DryRun?: EC2Boolean;
        Instances: EC2InstanceIdStringList;
        Status: EC2ReportStatusType;
        StartTime?: EC2DateTime;
        EndTime?: EC2DateTime;
        ReasonCodes: EC2ReasonCodesList;
        Description?: EC2String;
    }

    export type EC2ReportStatusType = string;
    export interface EC2RequestSpotFleetRequest {
        DryRun?: EC2Boolean;
        SpotFleetRequestConfig: EC2SpotFleetRequestConfigData;
    }

    export interface EC2RequestSpotFleetResponse {
        SpotFleetRequestId: EC2String;
    }

    export interface EC2RequestSpotInstancesRequest {
        DryRun?: EC2Boolean;
        SpotPrice: EC2String;
        ClientToken?: EC2String;
        InstanceCount?: EC2Integer;
        Type?: EC2SpotInstanceType;
        ValidFrom?: EC2DateTime;
        ValidUntil?: EC2DateTime;
        LaunchGroup?: EC2String;
        AvailabilityZoneGroup?: EC2String;
        LaunchSpecification?: EC2RequestSpotLaunchSpecification;
    }

    export interface EC2RequestSpotInstancesResult {
        SpotInstanceRequests?: EC2SpotInstanceRequestList;
    }

    export interface EC2Reservation {
        ReservationId?: EC2String;
        OwnerId?: EC2String;
        RequesterId?: EC2String;
        Groups?: EC2GroupIdentifierList;
        Instances?: EC2InstanceList;
    }

    export type EC2ReservationList = Array<EC2Reservation>;
    export interface EC2ReservedInstanceLimitPrice {
        Amount?: EC2Double;
        CurrencyCode?: EC2CurrencyCodeValues;
    }

    export type EC2ReservedInstanceState = string;
    export interface EC2ReservedInstances {
        ReservedInstancesId?: EC2String;
        InstanceType?: EC2InstanceType;
        AvailabilityZone?: EC2String;
        Start?: EC2DateTime;
        End?: EC2DateTime;
        Duration?: EC2Long;
        UsagePrice?: EC2Float;
        FixedPrice?: EC2Float;
        InstanceCount?: EC2Integer;
        ProductDescription?: EC2RIProductDescription;
        State?: EC2ReservedInstanceState;
        Tags?: EC2TagList;
        InstanceTenancy?: EC2Tenancy;
        CurrencyCode?: EC2CurrencyCodeValues;
        OfferingType?: EC2OfferingTypeValues;
        RecurringCharges?: EC2RecurringChargesList;
    }

    export interface EC2ReservedInstancesConfiguration {
        AvailabilityZone?: EC2String;
        Platform?: EC2String;
        InstanceCount?: EC2Integer;
        InstanceType?: EC2InstanceType;
    }

    export type EC2ReservedInstancesConfigurationList = Array<EC2ReservedInstancesConfiguration>;
    export interface EC2ReservedInstancesId {
        ReservedInstancesId?: EC2String;
    }

    export type EC2ReservedInstancesIdStringList = Array<EC2String>;
    export type EC2ReservedInstancesList = Array<EC2ReservedInstances>;
    export interface EC2ReservedInstancesListing {
        ReservedInstancesListingId?: EC2String;
        ReservedInstancesId?: EC2String;
        CreateDate?: EC2DateTime;
        UpdateDate?: EC2DateTime;
        Status?: EC2ListingStatus;
        StatusMessage?: EC2String;
        InstanceCounts?: EC2InstanceCountList;
        PriceSchedules?: EC2PriceScheduleList;
        Tags?: EC2TagList;
        ClientToken?: EC2String;
    }

    export type EC2ReservedInstancesListingList = Array<EC2ReservedInstancesListing>;
    export interface EC2ReservedInstancesModification {
        ReservedInstancesModificationId?: EC2String;
        ReservedInstancesIds?: EC2ReservedIntancesIds;
        ModificationResults?: EC2ReservedInstancesModificationResultList;
        CreateDate?: EC2DateTime;
        UpdateDate?: EC2DateTime;
        EffectiveDate?: EC2DateTime;
        Status?: EC2String;
        StatusMessage?: EC2String;
        ClientToken?: EC2String;
    }

    export type EC2ReservedInstancesModificationIdStringList = Array<EC2String>;
    export type EC2ReservedInstancesModificationList = Array<EC2ReservedInstancesModification>;
    export interface EC2ReservedInstancesModificationResult {
        ReservedInstancesId?: EC2String;
        TargetConfiguration?: EC2ReservedInstancesConfiguration;
    }

    export type EC2ReservedInstancesModificationResultList = Array<EC2ReservedInstancesModificationResult>;
    export interface EC2ReservedInstancesOffering {
        ReservedInstancesOfferingId?: EC2String;
        InstanceType?: EC2InstanceType;
        AvailabilityZone?: EC2String;
        Duration?: EC2Long;
        UsagePrice?: EC2Float;
        FixedPrice?: EC2Float;
        ProductDescription?: EC2RIProductDescription;
        InstanceTenancy?: EC2Tenancy;
        CurrencyCode?: EC2CurrencyCodeValues;
        OfferingType?: EC2OfferingTypeValues;
        RecurringCharges?: EC2RecurringChargesList;
        Marketplace?: EC2Boolean;
        PricingDetails?: EC2PricingDetailsList;
    }

    export type EC2ReservedInstancesOfferingIdStringList = Array<EC2String>;
    export type EC2ReservedInstancesOfferingList = Array<EC2ReservedInstancesOffering>;
    export type EC2ReservedIntancesIds = Array<EC2ReservedInstancesId>;
    export type EC2ResetImageAttributeName = string;
    export interface EC2ResetImageAttributeRequest {
        DryRun?: EC2Boolean;
        ImageId: EC2String;
        Attribute: EC2ResetImageAttributeName;
    }

    export interface EC2ResetInstanceAttributeRequest {
        DryRun?: EC2Boolean;
        InstanceId: EC2String;
        Attribute: EC2InstanceAttributeName;
    }

    export interface EC2ResetNetworkInterfaceAttributeRequest {
        DryRun?: EC2Boolean;
        NetworkInterfaceId: EC2String;
        SourceDestCheck?: EC2String;
    }

    export interface EC2ResetSnapshotAttributeRequest {
        DryRun?: EC2Boolean;
        SnapshotId: EC2String;
        Attribute: EC2SnapshotAttributeName;
    }

    export type EC2ResourceIdList = Array<EC2String>;
    export type EC2ResourceType = string;
    export type EC2RestorableByStringList = Array<EC2String>;
    export interface EC2RestoreAddressToClassicRequest {
        DryRun?: EC2Boolean;
        PublicIp: EC2String;
    }

    export interface EC2RestoreAddressToClassicResult {
        Status?: EC2Status;
        PublicIp?: EC2String;
    }

    export interface EC2RevokeSecurityGroupEgressRequest {
        DryRun?: EC2Boolean;
        GroupId: EC2String;
        SourceSecurityGroupName?: EC2String;
        SourceSecurityGroupOwnerId?: EC2String;
        IpProtocol?: EC2String;
        FromPort?: EC2Integer;
        ToPort?: EC2Integer;
        CidrIp?: EC2String;
        IpPermissions?: EC2IpPermissionList;
    }

    export interface EC2RevokeSecurityGroupIngressRequest {
        DryRun?: EC2Boolean;
        GroupName?: EC2String;
        GroupId?: EC2String;
        SourceSecurityGroupName?: EC2String;
        SourceSecurityGroupOwnerId?: EC2String;
        IpProtocol?: EC2String;
        FromPort?: EC2Integer;
        ToPort?: EC2Integer;
        CidrIp?: EC2String;
        IpPermissions?: EC2IpPermissionList;
    }

    export interface EC2Route {
        DestinationCidrBlock?: EC2String;
        DestinationPrefixListId?: EC2String;
        GatewayId?: EC2String;
        InstanceId?: EC2String;
        InstanceOwnerId?: EC2String;
        NetworkInterfaceId?: EC2String;
        VpcPeeringConnectionId?: EC2String;
        State?: EC2RouteState;
        Origin?: EC2RouteOrigin;
    }

    export type EC2RouteList = Array<EC2Route>;
    export type EC2RouteOrigin = string;
    export type EC2RouteState = string;
    export interface EC2RouteTable {
        RouteTableId?: EC2String;
        VpcId?: EC2String;
        Routes?: EC2RouteList;
        Associations?: EC2RouteTableAssociationList;
        Tags?: EC2TagList;
        PropagatingVgws?: EC2PropagatingVgwList;
    }

    export interface EC2RouteTableAssociation {
        RouteTableAssociationId?: EC2String;
        RouteTableId?: EC2String;
        SubnetId?: EC2String;
        Main?: EC2Boolean;
    }

    export type EC2RouteTableAssociationList = Array<EC2RouteTableAssociation>;
    export type EC2RouteTableList = Array<EC2RouteTable>;
    export type EC2RuleAction = string;
    export interface EC2RunInstancesMonitoringEnabled {
        Enabled: EC2Boolean;
    }

    export interface EC2RunInstancesRequest {
        DryRun?: EC2Boolean;
        ImageId: EC2String;
        MinCount: EC2Integer;
        MaxCount: EC2Integer;
        KeyName?: EC2String;
        SecurityGroups?: EC2SecurityGroupStringList;
        SecurityGroupIds?: EC2SecurityGroupIdStringList;
        UserData?: EC2String;
        InstanceType?: EC2InstanceType;
        Placement?: EC2Placement;
        KernelId?: EC2String;
        RamdiskId?: EC2String;
        BlockDeviceMappings?: EC2BlockDeviceMappingRequestList;
        Monitoring?: EC2RunInstancesMonitoringEnabled;
        SubnetId?: EC2String;
        DisableApiTermination?: EC2Boolean;
        InstanceInitiatedShutdownBehavior?: EC2ShutdownBehavior;
        PrivateIpAddress?: EC2String;
        ClientToken?: EC2String;
        AdditionalInfo?: EC2String;
        NetworkInterfaces?: EC2InstanceNetworkInterfaceSpecificationList;
        IamInstanceProfile?: EC2IamInstanceProfileSpecification;
        EbsOptimized?: EC2Boolean;
    }

    export interface EC2S3Storage {
        Bucket?: EC2String;
        Prefix?: EC2String;
        AWSAccessKeyId?: EC2String;
        UploadPolicy?: EC2Blob;
        UploadPolicySignature?: EC2String;
    }

    export interface EC2SecurityGroup {
        OwnerId?: EC2String;
        GroupName?: EC2String;
        GroupId?: EC2String;
        Description?: EC2String;
        IpPermissions?: EC2IpPermissionList;
        IpPermissionsEgress?: EC2IpPermissionList;
        VpcId?: EC2String;
        Tags?: EC2TagList;
    }

    export type EC2SecurityGroupIdStringList = Array<EC2String>;
    export type EC2SecurityGroupList = Array<EC2SecurityGroup>;
    export type EC2SecurityGroupStringList = Array<EC2String>;
    export type EC2ShutdownBehavior = string;
    export interface EC2Snapshot {
        SnapshotId?: EC2String;
        VolumeId?: EC2String;
        State?: EC2SnapshotState;
        StartTime?: EC2DateTime;
        Progress?: EC2String;
        OwnerId?: EC2String;
        Description?: EC2String;
        VolumeSize?: EC2Integer;
        OwnerAlias?: EC2String;
        Tags?: EC2TagList;
        Encrypted?: EC2Boolean;
        KmsKeyId?: EC2String;
    }

    export type EC2SnapshotAttributeName = string;
    export interface EC2SnapshotDetail {
        DiskImageSize?: EC2Double;
        Description?: EC2String;
        Format?: EC2String;
        Url?: EC2String;
        UserBucket?: EC2UserBucketDetails;
        DeviceName?: EC2String;
        SnapshotId?: EC2String;
        Progress?: EC2String;
        StatusMessage?: EC2String;
        Status?: EC2String;
    }

    export type EC2SnapshotDetailList = Array<EC2SnapshotDetail>;
    export interface EC2SnapshotDiskContainer {
        Description?: EC2String;
        Format?: EC2String;
        Url?: EC2String;
        UserBucket?: EC2UserBucket;
    }

    export type EC2SnapshotIdStringList = Array<EC2String>;
    export type EC2SnapshotList = Array<EC2Snapshot>;
    export type EC2SnapshotState = string;
    export interface EC2SnapshotTaskDetail {
        DiskImageSize?: EC2Double;
        Description?: EC2String;
        Format?: EC2String;
        Url?: EC2String;
        UserBucket?: EC2UserBucketDetails;
        SnapshotId?: EC2String;
        Progress?: EC2String;
        StatusMessage?: EC2String;
        Status?: EC2String;
    }

    export interface EC2SpotDatafeedSubscription {
        OwnerId?: EC2String;
        Bucket?: EC2String;
        Prefix?: EC2String;
        State?: EC2DatafeedSubscriptionState;
        Fault?: EC2SpotInstanceStateFault;
    }

    export interface EC2SpotFleetRequestConfig {
        SpotFleetRequestId: EC2String;
        SpotFleetRequestState: EC2BatchState;
        SpotFleetRequestConfig: EC2SpotFleetRequestConfigData;
    }

    export interface EC2SpotFleetRequestConfigData {
        ClientToken?: EC2String;
        SpotPrice: EC2String;
        TargetCapacity: EC2Integer;
        ValidFrom?: EC2DateTime;
        ValidUntil?: EC2DateTime;
        TerminateInstancesWithExpiration?: EC2Boolean;
        IamFleetRole: EC2String;
        LaunchSpecifications: EC2LaunchSpecsList;
    }

    export type EC2SpotFleetRequestConfigSet = Array<EC2SpotFleetRequestConfig>;
    export interface EC2SpotInstanceRequest {
        SpotInstanceRequestId?: EC2String;
        SpotPrice?: EC2String;
        Type?: EC2SpotInstanceType;
        State?: EC2SpotInstanceState;
        Fault?: EC2SpotInstanceStateFault;
        Status?: EC2SpotInstanceStatus;
        ValidFrom?: EC2DateTime;
        ValidUntil?: EC2DateTime;
        LaunchGroup?: EC2String;
        AvailabilityZoneGroup?: EC2String;
        LaunchSpecification?: EC2LaunchSpecification;
        InstanceId?: EC2String;
        CreateTime?: EC2DateTime;
        ProductDescription?: EC2RIProductDescription;
        Tags?: EC2TagList;
        LaunchedAvailabilityZone?: EC2String;
    }

    export type EC2SpotInstanceRequestIdList = Array<EC2String>;
    export type EC2SpotInstanceRequestList = Array<EC2SpotInstanceRequest>;
    export type EC2SpotInstanceState = string;
    export interface EC2SpotInstanceStateFault {
        Code?: EC2String;
        Message?: EC2String;
    }

    export interface EC2SpotInstanceStatus {
        Code?: EC2String;
        UpdateTime?: EC2DateTime;
        Message?: EC2String;
    }

    export type EC2SpotInstanceType = string;
    export interface EC2SpotPlacement {
        AvailabilityZone?: EC2String;
        GroupName?: EC2String;
    }

    export interface EC2SpotPrice {
        InstanceType?: EC2InstanceType;
        ProductDescription?: EC2RIProductDescription;
        SpotPrice?: EC2String;
        Timestamp?: EC2DateTime;
        AvailabilityZone?: EC2String;
    }

    export type EC2SpotPriceHistoryList = Array<EC2SpotPrice>;
    export interface EC2StartInstancesRequest {
        InstanceIds: EC2InstanceIdStringList;
        AdditionalInfo?: EC2String;
        DryRun?: EC2Boolean;
    }

    export interface EC2StartInstancesResult {
        StartingInstances?: EC2InstanceStateChangeList;
    }

    export type EC2State = string;
    export interface EC2StateReason {
        Code?: EC2String;
        Message?: EC2String;
    }

    export type EC2Status = string;
    export type EC2StatusName = string;
    export type EC2StatusType = string;
    export interface EC2StopInstancesRequest {
        DryRun?: EC2Boolean;
        InstanceIds: EC2InstanceIdStringList;
        Force?: EC2Boolean;
    }

    export interface EC2StopInstancesResult {
        StoppingInstances?: EC2InstanceStateChangeList;
    }

    export interface EC2Storage {
        S3?: EC2S3Storage;
    }

    export type EC2String = string;
    export interface EC2Subnet {
        SubnetId?: EC2String;
        State?: EC2SubnetState;
        VpcId?: EC2String;
        CidrBlock?: EC2String;
        AvailableIpAddressCount?: EC2Integer;
        AvailabilityZone?: EC2String;
        DefaultForAz?: EC2Boolean;
        MapPublicIpOnLaunch?: EC2Boolean;
        Tags?: EC2TagList;
    }

    export type EC2SubnetIdStringList = Array<EC2String>;
    export type EC2SubnetList = Array<EC2Subnet>;
    export type EC2SubnetState = string;
    export type EC2SummaryStatus = string;
    export interface EC2Tag {
        Key?: EC2String;
        Value?: EC2String;
    }

    export interface EC2TagDescription {
        ResourceId?: EC2String;
        ResourceType?: EC2ResourceType;
        Key?: EC2String;
        Value?: EC2String;
    }

    export type EC2TagDescriptionList = Array<EC2TagDescription>;
    export type EC2TagList = Array<EC2Tag>;
    export type EC2TelemetryStatus = string;
    export type EC2Tenancy = string;
    export interface EC2TerminateInstancesRequest {
        DryRun?: EC2Boolean;
        InstanceIds: EC2InstanceIdStringList;
    }

    export interface EC2TerminateInstancesResult {
        TerminatingInstances?: EC2InstanceStateChangeList;
    }

    export interface EC2UnassignPrivateIpAddressesRequest {
        NetworkInterfaceId: EC2String;
        PrivateIpAddresses: EC2PrivateIpAddressStringList;
    }

    export interface EC2UnmonitorInstancesRequest {
        DryRun?: EC2Boolean;
        InstanceIds: EC2InstanceIdStringList;
    }

    export interface EC2UnmonitorInstancesResult {
        InstanceMonitorings?: EC2InstanceMonitoringList;
    }

    export interface EC2UnsuccessfulItem {
        ResourceId?: EC2String;
        Error: EC2UnsuccessfulItemError;
    }

    export interface EC2UnsuccessfulItemError {
        Code: EC2String;
        Message: EC2String;
    }

    export type EC2UnsuccessfulItemSet = Array<EC2UnsuccessfulItem>;
    export interface EC2UserBucket {
        S3Bucket?: EC2String;
        S3Key?: EC2String;
    }

    export interface EC2UserBucketDetails {
        S3Bucket?: EC2String;
        S3Key?: EC2String;
    }

    export interface EC2UserData {
        Data?: EC2String;
    }

    export type EC2UserGroupStringList = Array<EC2String>;
    export interface EC2UserIdGroupPair {
        UserId?: EC2String;
        GroupName?: EC2String;
        GroupId?: EC2String;
    }

    export type EC2UserIdGroupPairList = Array<EC2UserIdGroupPair>;
    export type EC2UserIdStringList = Array<EC2String>;
    export type EC2ValueStringList = Array<EC2String>;
    export interface EC2VgwTelemetry {
        OutsideIpAddress?: EC2String;
        Status?: EC2TelemetryStatus;
        LastStatusChange?: EC2DateTime;
        StatusMessage?: EC2String;
        AcceptedRouteCount?: EC2Integer;
    }

    export type EC2VgwTelemetryList = Array<EC2VgwTelemetry>;
    export type EC2VirtualizationType = string;
    export interface EC2Volume {
        VolumeId?: EC2String;
        Size?: EC2Integer;
        SnapshotId?: EC2String;
        AvailabilityZone?: EC2String;
        State?: EC2VolumeState;
        CreateTime?: EC2DateTime;
        Attachments?: EC2VolumeAttachmentList;
        Tags?: EC2TagList;
        VolumeType?: EC2VolumeType;
        Iops?: EC2Integer;
        Encrypted?: EC2Boolean;
        KmsKeyId?: EC2String;
    }

    export interface EC2VolumeAttachment {
        VolumeId?: EC2String;
        InstanceId?: EC2String;
        Device?: EC2String;
        State?: EC2VolumeAttachmentState;
        AttachTime?: EC2DateTime;
        DeleteOnTermination?: EC2Boolean;
    }

    export type EC2VolumeAttachmentList = Array<EC2VolumeAttachment>;
    export type EC2VolumeAttachmentState = string;
    export type EC2VolumeAttributeName = string;
    export interface EC2VolumeDetail {
        Size: EC2Long;
    }

    export type EC2VolumeIdStringList = Array<EC2String>;
    export type EC2VolumeList = Array<EC2Volume>;
    export type EC2VolumeState = string;
    export interface EC2VolumeStatusAction {
        Code?: EC2String;
        Description?: EC2String;
        EventType?: EC2String;
        EventId?: EC2String;
    }

    export type EC2VolumeStatusActionsList = Array<EC2VolumeStatusAction>;
    export interface EC2VolumeStatusDetails {
        Name?: EC2VolumeStatusName;
        Status?: EC2String;
    }

    export type EC2VolumeStatusDetailsList = Array<EC2VolumeStatusDetails>;
    export interface EC2VolumeStatusEvent {
        EventType?: EC2String;
        Description?: EC2String;
        NotBefore?: EC2DateTime;
        NotAfter?: EC2DateTime;
        EventId?: EC2String;
    }

    export type EC2VolumeStatusEventsList = Array<EC2VolumeStatusEvent>;
    export interface EC2VolumeStatusInfo {
        Status?: EC2VolumeStatusInfoStatus;
        Details?: EC2VolumeStatusDetailsList;
    }

    export type EC2VolumeStatusInfoStatus = string;
    export interface EC2VolumeStatusItem {
        VolumeId?: EC2String;
        AvailabilityZone?: EC2String;
        VolumeStatus?: EC2VolumeStatusInfo;
        Events?: EC2VolumeStatusEventsList;
        Actions?: EC2VolumeStatusActionsList;
    }

    export type EC2VolumeStatusList = Array<EC2VolumeStatusItem>;
    export type EC2VolumeStatusName = string;
    export type EC2VolumeType = string;
    export interface EC2Vpc {
        VpcId?: EC2String;
        State?: EC2VpcState;
        CidrBlock?: EC2String;
        DhcpOptionsId?: EC2String;
        Tags?: EC2TagList;
        InstanceTenancy?: EC2Tenancy;
        IsDefault?: EC2Boolean;
    }

    export interface EC2VpcAttachment {
        VpcId?: EC2String;
        State?: EC2AttachmentStatus;
    }

    export type EC2VpcAttachmentList = Array<EC2VpcAttachment>;
    export type EC2VpcAttributeName = string;
    export interface EC2VpcClassicLink {
        VpcId?: EC2String;
        ClassicLinkEnabled?: EC2Boolean;
        Tags?: EC2TagList;
    }

    export type EC2VpcClassicLinkIdList = Array<EC2String>;
    export type EC2VpcClassicLinkList = Array<EC2VpcClassicLink>;
    export interface EC2VpcEndpoint {
        VpcEndpointId?: EC2String;
        VpcId?: EC2String;
        ServiceName?: EC2String;
        State?: EC2State;
        PolicyDocument?: EC2String;
        RouteTableIds?: EC2ValueStringList;
        CreationTimestamp?: EC2DateTime;
    }

    export type EC2VpcEndpointSet = Array<EC2VpcEndpoint>;
    export type EC2VpcIdStringList = Array<EC2String>;
    export type EC2VpcList = Array<EC2Vpc>;
    export interface EC2VpcPeeringConnection {
        AccepterVpcInfo?: EC2VpcPeeringConnectionVpcInfo;
        ExpirationTime?: EC2DateTime;
        RequesterVpcInfo?: EC2VpcPeeringConnectionVpcInfo;
        Status?: EC2VpcPeeringConnectionStateReason;
        Tags?: EC2TagList;
        VpcPeeringConnectionId?: EC2String;
    }

    export type EC2VpcPeeringConnectionList = Array<EC2VpcPeeringConnection>;
    export interface EC2VpcPeeringConnectionStateReason {
        Code?: EC2String;
        Message?: EC2String;
    }

    export interface EC2VpcPeeringConnectionVpcInfo {
        CidrBlock?: EC2String;
        OwnerId?: EC2String;
        VpcId?: EC2String;
    }

    export type EC2VpcState = string;
    export interface EC2VpnConnection {
        VpnConnectionId?: EC2String;
        State?: EC2VpnState;
        CustomerGatewayConfiguration?: EC2String;
        Type?: EC2GatewayType;
        CustomerGatewayId?: EC2String;
        VpnGatewayId?: EC2String;
        Tags?: EC2TagList;
        VgwTelemetry?: EC2VgwTelemetryList;
        Options?: EC2VpnConnectionOptions;
        Routes?: EC2VpnStaticRouteList;
    }

    export type EC2VpnConnectionIdStringList = Array<EC2String>;
    export type EC2VpnConnectionList = Array<EC2VpnConnection>;
    export interface EC2VpnConnectionOptions {
        StaticRoutesOnly?: EC2Boolean;
    }

    export interface EC2VpnConnectionOptionsSpecification {
        StaticRoutesOnly?: EC2Boolean;
    }

    export interface EC2VpnGateway {
        VpnGatewayId?: EC2String;
        State?: EC2VpnState;
        Type?: EC2GatewayType;
        AvailabilityZone?: EC2String;
        VpcAttachments?: EC2VpcAttachmentList;
        Tags?: EC2TagList;
    }

    export type EC2VpnGatewayIdStringList = Array<EC2String>;
    export type EC2VpnGatewayList = Array<EC2VpnGateway>;
    export type EC2VpnState = string;
    export interface EC2VpnStaticRoute {
        DestinationCidrBlock?: EC2String;
        Source?: EC2VpnStaticRouteSource;
        State?: EC2VpnState;
    }

    export type EC2VpnStaticRouteList = Array<EC2VpnStaticRoute>;
    export type EC2VpnStaticRouteSource = string;
    export type EC2ZoneNameStringList = Array<EC2String>;
    export type EC2NewDhcpConfigurationList = Array<EC2NewDhcpConfiguration>;
    export interface EC2NewDhcpConfiguration {
        Key?: EC2String;
        Values?: EC2ValueStringList;
    }

    export type EC2DhcpConfigurationValueList = Array<EC2AttributeValue>;
    export type EC2Blob = any; // not really - it was 'blob' instead - must fix this one
    export interface EC2BlobAttributeValue {
        Value?: EC2Blob;
    }

    export interface EC2RequestSpotLaunchSpecification {
        ImageId?: EC2String;
        KeyName?: EC2String;
        SecurityGroups?: EC2ValueStringList;
        UserData?: EC2String;
        AddressingType?: EC2String;
        InstanceType?: EC2InstanceType;
        Placement?: EC2SpotPlacement;
        KernelId?: EC2String;
        RamdiskId?: EC2String;
        BlockDeviceMappings?: EC2BlockDeviceMappingList;
        SubnetId?: EC2String;
        NetworkInterfaces?: EC2InstanceNetworkInterfaceSpecificationList;
        IamInstanceProfile?: EC2IamInstanceProfileSpecification;
        EbsOptimized?: EC2Boolean;
        Monitoring?: EC2RunInstancesMonitoringEnabled;
        SecurityGroupIds?: EC2ValueStringList;
    }

}
