import * as User from './user'
import * as UserHistory from './user-history'

import * as File from './file'
import * as Font from './font'
import * as DataSource from './datasource'
import * as Publisher from './publisher'

import * as Board from './board'
import * as Group from './group'
import * as PlayGroup from './play-group'

import * as Menu from './menu'
import * as MenuButton from './menu-button'
import * as MenuColumn from './menu-column'
import * as Domain from './domain'
import * as CommonCode from './common-code'
import * as CommonCodeDetail from './common-code-detail'
import * as Resource from './resource'
import * as ResourceColumn from './resource-column'
import * as Terminology from './terminology'
import * as PermitUrl from './permit-url'
import * as Role from './role'
import * as UsersRole from './users-role'
import * as UserRoleHistory from './user-role-history'

export const queries = [
  User.Query,
  UserHistory.Query,

  File.Query,
  Font.Query,
  DataSource.Query,
  Publisher.Query,

  Board.Query,
  Group.Query,
  PlayGroup.Query,

  Menu.Query,
  MenuButton.Query,
  MenuColumn.Query,
  Domain.Query,
  CommonCode.Query,
  CommonCodeDetail.Query,
  Resource.Query,
  ResourceColumn.Query,
  Terminology.Query,
  PermitUrl.Query,
  Role.Query,
  UsersRole.Query,
  UserRoleHistory.Query
]

export const mutations = [
  User.Mutation,
  UserHistory.Mutation,

  File.Mutation,
  Font.Mutation,
  DataSource.Mutation,
  Publisher.Mutation,

  Board.Mutation,
  Group.Mutation,
  PlayGroup.Mutation,

  Menu.Mutation,
  MenuButton.Mutation,
  MenuColumn.Mutation,
  Domain.Mutation,
  CommonCode.Mutation,
  CommonCodeDetail.Mutation,
  Resource.Mutation,
  ResourceColumn.Mutation,
  Terminology.Mutation,
  PermitUrl.Mutation,
  Role.Mutation,
  UsersRole.Mutation,
  UserRoleHistory.Mutation
]

export const types = [
  ...User.Types,
  ...UserHistory.Types,

  ...File.Types,
  ...Font.Types,
  ...DataSource.Types,
  ...Publisher.Types,

  ...Board.Types,
  ...Group.Types,
  ...PlayGroup.Types,

  ...Menu.Types,
  ...MenuButton.Types,
  ...MenuColumn.Types,
  ...Domain.Types,
  ...CommonCode.Types,
  ...CommonCodeDetail.Types,
  ...Resource.Types,
  ...ResourceColumn.Types,
  ...Terminology.Types,
  ...PermitUrl.Types,
  ...Role.Types,
  ...UsersRole.Types,
  ...UserRoleHistory.Types
]
