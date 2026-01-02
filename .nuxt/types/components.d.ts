
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  'AppFooter': typeof import("../../app/components/AppFooter.vue")['default']
  'AppHeader': typeof import("../../app/components/AppHeader.vue")['default']
  'ComplaintBubble': typeof import("../../app/components/ComplaintBubble.vue")['default']
  'CookieConsent': typeof import("../../app/components/CookieConsent.vue")['default']
  'FeatureCard': typeof import("../../app/components/FeatureCard.vue")['default']
  'SubscriberCount': typeof import("../../app/components/SubscriberCount.vue")['default']
  'WaitlistModal': typeof import("../../app/components/WaitlistModal.vue")['default']
  'HomePageHomeHero': typeof import("../../app/components/home-page/HomeHero.vue")['default']
  'HomePageHomeSectionFeature': typeof import("../../app/components/home-page/HomeSectionFeature.vue")['default']
  'HomePageHomeSectionFour': typeof import("../../app/components/home-page/HomeSectionFour.vue")['default']
  'HomePageHomeSectionThree': typeof import("../../app/components/home-page/HomeSectionThree.vue")['default']
  'HomePageHomeSectionTwoVue': typeof import("../../app/components/home-page/HomeSectionTwo.vue.vue")['default']
  'HomePageModules': typeof import("../../app/components/home-page/Modules.vue")['default']
  'HomePageServiceEntrpreneurs': typeof import("../../app/components/home-page/ServiceEntrpreneurs.vue")['default']
  'PortalFooterVue': typeof import("../../app/components/portal/PortalFooter.vue.vue")['default']
  'PortalHeaderVue': typeof import("../../app/components/portal/PortalHeader.vue.vue")['default']
  'PortalNavsSettingsNav': typeof import("../../app/components/portal/navs/SettingsNav.vue")['default']
  'NuxtWelcome': typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  'NuxtLayout': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  'NuxtErrorBoundary': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  'ClientOnly': typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  'DevOnly': typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  'ServerPlaceholder': typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  'NuxtLink': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  'NuxtLoadingIndicator': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  'NuxtTime': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  'NuxtRouteAnnouncer': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  'NuxtImg': typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
  'NuxtPicture': typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
  'NuxtPage': typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  'NoScript': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  'Link': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  'Base': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  'Title': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  'Meta': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  'Style': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  'Head': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  'Html': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  'Body': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  'NuxtIsland': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  'LazyAppFooter': LazyComponent<typeof import("../../app/components/AppFooter.vue")['default']>
  'LazyAppHeader': LazyComponent<typeof import("../../app/components/AppHeader.vue")['default']>
  'LazyComplaintBubble': LazyComponent<typeof import("../../app/components/ComplaintBubble.vue")['default']>
  'LazyCookieConsent': LazyComponent<typeof import("../../app/components/CookieConsent.vue")['default']>
  'LazyFeatureCard': LazyComponent<typeof import("../../app/components/FeatureCard.vue")['default']>
  'LazySubscriberCount': LazyComponent<typeof import("../../app/components/SubscriberCount.vue")['default']>
  'LazyWaitlistModal': LazyComponent<typeof import("../../app/components/WaitlistModal.vue")['default']>
  'LazyHomePageHomeHero': LazyComponent<typeof import("../../app/components/home-page/HomeHero.vue")['default']>
  'LazyHomePageHomeSectionFeature': LazyComponent<typeof import("../../app/components/home-page/HomeSectionFeature.vue")['default']>
  'LazyHomePageHomeSectionFour': LazyComponent<typeof import("../../app/components/home-page/HomeSectionFour.vue")['default']>
  'LazyHomePageHomeSectionThree': LazyComponent<typeof import("../../app/components/home-page/HomeSectionThree.vue")['default']>
  'LazyHomePageHomeSectionTwoVue': LazyComponent<typeof import("../../app/components/home-page/HomeSectionTwo.vue.vue")['default']>
  'LazyHomePageModules': LazyComponent<typeof import("../../app/components/home-page/Modules.vue")['default']>
  'LazyHomePageServiceEntrpreneurs': LazyComponent<typeof import("../../app/components/home-page/ServiceEntrpreneurs.vue")['default']>
  'LazyPortalFooterVue': LazyComponent<typeof import("../../app/components/portal/PortalFooter.vue.vue")['default']>
  'LazyPortalHeaderVue': LazyComponent<typeof import("../../app/components/portal/PortalHeader.vue.vue")['default']>
  'LazyPortalNavsSettingsNav': LazyComponent<typeof import("../../app/components/portal/navs/SettingsNav.vue")['default']>
  'LazyNuxtWelcome': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  'LazyNuxtLayout': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  'LazyClientOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  'LazyDevOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  'LazyServerPlaceholder': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  'LazyNuxtLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  'LazyNuxtTime': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  'LazyNuxtImg': LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
  'LazyNuxtPicture': LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
  'LazyNuxtPage': LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  'LazyNoScript': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  'LazyLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  'LazyBase': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  'LazyTitle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  'LazyMeta': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  'LazyStyle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  'LazyHead': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  'LazyHtml': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  'LazyBody': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  'LazyNuxtIsland': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
