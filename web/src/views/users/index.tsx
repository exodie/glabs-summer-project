import { UserPurchases } from './purchases'
import { UserSettings } from './settings/ui'

import { ProfileTabs } from '~/shared/types'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/shared/ui'

export const UsersProfile = () => {
  return (
    <>
      <Tabs defaultValue={ProfileTabs.PURCHASES} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value={ProfileTabs.PURCHASES}>Purchases</TabsTrigger>
          <TabsTrigger value={ProfileTabs.SETTINGS}>Settings</TabsTrigger>
          <TabsTrigger value={ProfileTabs.SECURITY}>Security</TabsTrigger>
          <TabsTrigger value={ProfileTabs.HISTORY}>History</TabsTrigger>
        </TabsList>

        <TabsContent value={ProfileTabs.PURCHASES}>
          <UserPurchases />
        </TabsContent>
        <TabsContent value={ProfileTabs.SETTINGS}>
          <UserSettings />
        </TabsContent>
        <TabsContent value={ProfileTabs.SECURITY}>security tabs</TabsContent>
        <TabsContent value={ProfileTabs.HISTORY}>history tabs</TabsContent>
      </Tabs>
    </>
  )
}
