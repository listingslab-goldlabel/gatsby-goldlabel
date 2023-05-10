import {firebaseConfig} from "./firebaseConfig"

import Start from "./Start"
import PWA from "./app/PWA"
import {makeMeta} from "./app/Meta"
import SEO from "./app/SEO"
import WrapRedux from "./app/WrapRedux"

import {makeImgSrc} from "./theme/utils"
import {makeTheme} from "./theme/makeTheme"

import Meta from "./components/Meta"
import NotFound from "./components/NotFound"
import Icon from "./components/Icon"
import {Font} from "./components/Font"
import HeroClip from "./components/HeroClip"
import BooksList from "./components/BooksList"
import PWABar from "./components/PWABar"
import MuiTheme from "./components/MuiTheme"
import Slice from "./components/Slice"
import BookCard from "./components/BookCard"
import BookPage from "./components/BookPage"
import ImageMedia from "./components/ImageMedia"

import { selectPWA, setPwaKey } from "./redux/pwaReducer"
import {store} from "./redux/store"
import {persistor} from "./redux/store"
import { startApp } from "./redux/actions/startApp"
import { getAValue } from "./redux/actions/getAValue"
import { setLocale } from "./redux/actions/setLocale"
import { setSeo } from "./redux/actions/setSeo"
import { setOpen } from "./redux/actions/setOpen"
import { navigateTo } from "./redux/actions/navigateTo"

import {usePwaDispatch} from "./hooks/usePwaDispatch"
import {usePwaSelect} from "./hooks/usePwaSelect"
import {useGQLMeta} from "./hooks/useGQLMeta"
import {useGQLApps} from "./hooks/useGQLApps"


export {
  PWA,
  firebaseConfig,
  makeMeta,
  store,
  persistor,
  setPwaKey,
  WrapRedux,
  MuiTheme,
  usePwaDispatch,
  usePwaSelect,
  useGQLApps,
  makeTheme,
  Slice,
  PWABar,
  HeroClip,
  SEO,
  Icon,
  Font,
  Meta,
  Start,
  NotFound,
  BooksList,
  BookCard,
  BookPage,
  ImageMedia,
  makeImgSrc,
  useGQLMeta,
  selectPWA,
  startApp,
  getAValue,
  setLocale,
  navigateTo,
  setSeo,
  setOpen,
}
