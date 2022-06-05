import type { IUser, IRole, IRoom } from '@rocket.chat/core-typings';

import type { IBaseModel } from './IBaseModel';

export interface IUsersModel extends IBaseModel<IUser> {
	addRolesByUserId(uid: string, roles: IRole['_id'][]): any;
	findUsersInRoles(roles: IRole['_id'][], scope: null, options: any): any;
	findOneByUsername(username: string, options?: any): any;
	findOneAgentById(_id: string, options: any): any;
	findUsersInRolesWithQuery(roles: IRole['_id'] | IRole['_id'][], query: any, options: any): any;
	findOneByUsernameAndRoomIgnoringCase(username: string, rid: IRoom['_id'], options: any): any;
	findOneByIdAndLoginHashedToken(_id: string, token: any, options?: any): any;
	findByActiveUsersExcept(
		searchTerm: any,
		exceptions: any,
		options: any,
		searchFields: any,
		extraQuery?: any,
		params?: { startsWith?: boolean; endsWith?: boolean },
	): any;

	findActiveByIds(userIds: any, options?: any): any;

	findByIds(userIds: any, options?: any): any;

	findOneByUsernameIgnoringCase(username: any, options: any): any;

	findOneByLDAPId(id: any, attribute?: any): Promise<any>;

	findLDAPUsers(options: any): any;

	findConnectedLDAPUsers(options: any): any;

	isUserInRole(userId: any, roleId: any): any;

	getDistinctFederationDomains(): any;

	getNextLeastBusyAgent(department: any, ignoreAgentId: any): Promise<any>;

	getLastAvailableAgentRouted(department: any, ignoreAgentId: any): Promise<any>;

	setLastRoutingTime(userId: any): Promise<any>;

	setLivechatStatusIf(userId: any, status: any, conditions?: any, extraFields?: any): any;

	getAgentAndAmountOngoingChats(userId: any): Promise<any>;

	findAllResumeTokensByUserId(userId: any): any;

	findActiveByUsernameOrNameRegexWithExceptionsAndConditions(termRegex: any, exceptions: any, conditions: any, options: any): any;

	countAllAgentsStatus({ departmentId }: { departmentId?: any }): any;

	getTotalOfRegisteredUsersByDate({ start, end, options }: { start: any; end: any; options?: any }): any;

	getUserLanguages(): any;

	updateStatusText(_id: any, statusText: any): any;

	updateStatusByAppId(appId: any, status: any): any;

	openAgentsBusinessHoursByBusinessHourId(businessHourIds: any): any;

	openAgentBusinessHoursByBusinessHourIdsAndAgentId(businessHourIds: any, agentId: any): any;

	addBusinessHourByAgentIds(agentIds: any, businessHourId: any): any;

	removeBusinessHourByAgentIds(agentIds: any, businessHourId: any): any;

	openBusinessHourToAgentsWithoutDepartment(agentIdsWithDepartment: any, businessHourId: any): any;

	closeBusinessHourToAgentsWithoutDepartment(agentIdsWithDepartment: any, businessHourId: any): any;

	closeAgentsBusinessHoursByBusinessHourIds(businessHourIds: any): any;

	updateLivechatStatusBasedOnBusinessHours(userIds?: any): any;

	setLivechatStatusActiveBasedOnBusinessHours(userId: any): any;

	isAgentWithinBusinessHours(agentId: any): Promise<any>;

	removeBusinessHoursFromAllUsers(): any;

	resetTOTPById(userId: any): any;

	unsetLoginTokens(userId: any): any;

	removeNonPATLoginTokensExcept(userId: any, authToken: any): any;

	removeRoomsByRoomIdsAndUserId(rids: any, userId: any): any;

	removeRolesByUserId(uid: string, roles: any): any;

	isUserInRoleScope(uid: any): Promise<any>;

	addBannerById(_id: any, banner: any): any;

	findOneByAgentUsername(username: any, options: any): any;

	findOneByExtension(extension: any, options: any): any;

	findByExtensions(extensions: any, options?: any): any;

	getVoipExtensionByUserId(userId: any, options: any): any;

	setExtension(userId: any, extension: any): any;

	unsetExtension(userId: any): any;

	getAvailableAgentsIncludingExt(includeExt: any, text: any, options: any): any;

	findActiveUsersTOTPEnable(options: any): any;

	findActiveUsersEmail2faEnable(options: any): any;
}
