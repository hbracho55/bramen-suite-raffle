// Next Imports
import dynamic from 'next/dynamic'

// Component Imports
import RequestSettings from '@/views/apps/request/settings/index'

const StoreDetailsTab = dynamic(() => import('@views/apps/ecommerce/settings/store-details'))
const PaymentsTab = dynamic(() => import('@views/apps/ecommerce/settings/payments'))
const CheckoutTab = dynamic(() => import('@views/apps/ecommerce/settings/checkout'))
const ShippingDeliveryTab = dynamic(() => import('@views/apps/ecommerce/settings/ShippingDelivery'))
const LocationsTab = dynamic(() => import('@views/apps/ecommerce/settings/locations'))
const NotificationsTab = dynamic(() => import('@views/apps/ecommerce/settings/Notifications'))

// Vars
const tabContentList = () => ({
  'store-details': <StoreDetailsTab />,
  payments: <PaymentsTab />,
  checkout: <CheckoutTab />,
  'shipping-delivery': <ShippingDeliveryTab />,
  locations: <LocationsTab />,
  notifications: <NotificationsTab />
})

const RequestSettingsPage = () => {
  return <RequestSettings tabContentList={tabContentList()} />
}

export default RequestSettingsPage
