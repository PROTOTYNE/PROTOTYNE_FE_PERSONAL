import { Suspense, lazy } from "react";
import {
  Navigate,
  BrowserRouter as RootRouter,
  Route,
  Routes,
} from "react-router-dom";

import AppStyles from "./AppStyles";
import AuthRouter from "./AuthRouter";

import { Loading } from "@/entities";
import { PAGE_URL } from "@/shared";
import { AuthContainer, MainContainer } from "@/widget";

const SignIn = lazy(() => import("@/pages/auth/signin/SignInPage"));
const Redirect = lazy(() => import("@/pages/auth/signin/RedirectPage"));

const SignUp = lazy(() => import("@/pages/auth/signup/SignUpPage"));
const PersonalInfo = lazy(() => import("@/pages/auth/signup/PersonalInfoPage"));
const TermsOfUse = lazy(() => import("@/pages/auth/signup/TermsOfUsePage"));

const MyInfo = lazy(() => import("@/pages/auth/myinfo/MyInfoPage"));
const EditMyInfo = lazy(() => import("@/pages/auth/myinfo/EditMyInfoPage"));

const Home = lazy(() => import("@/pages/home/HomePage"));
const NotFound = lazy(() => import("@/pages/notfound/NotFoundPage"));

const Product = lazy(() => import("@/pages/product/ProductPage"));
const Address = lazy(() => import("@/pages/address/AddressPage"));
const AddressInfo = lazy(
  () => import("@/pages/product/addressInfo/AddressInfoPage")
);

const Ticket = lazy(() => import("@/pages/ticket/TicketPage"));

const Search = lazy(() => import("@/pages/search/SearchPage"));
const Detail = lazy(() => import("@/pages/home/DetailPage"));
const Category = lazy(() => import("@/pages/home/CategoryPage"));
const Bookmark = lazy(() => import("@/pages/bookmark/BookmarkPage"));

const Alarm = lazy(() => import("@/pages/alarm/AlarmPage"));

const Review = lazy(() => import("@/pages/review/ReviewPage"));

const PageRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RootRouter>
        <AppStyles />
        <AuthRouter>
          <Routes>
            <Route>
              {/* 로그인 이전 */}
              <Route element={<AuthContainer />}>
                <Route
                  index
                  element={<Navigate to={PAGE_URL.Home} replace />}
                />
                <Route path={PAGE_URL.SignIn} element={<SignIn />} />
                <Route path={PAGE_URL.Redirect} element={<Redirect />} />
                <Route path={PAGE_URL.SignUp} element={<SignUp />} />
                <Route path={PAGE_URL.TermsOfUse} element={<TermsOfUse />} />
                <Route
                  path={PAGE_URL.PersonalInfo}
                  element={<PersonalInfo />}
                />
              </Route>

              {/* 로그인 이후 */}
              <Route element={<MainContainer />}>
                <Route path={PAGE_URL.Home} element={<Home />} />
                <Route path={PAGE_URL.MyInfo} element={<MyInfo />} />
                <Route path={PAGE_URL.EditMyInfo} element={<EditMyInfo />} />

                <Route path={PAGE_URL.Product} element={<Product />} />
                <Route path={PAGE_URL.Address} element={<Address />} />
                <Route path={PAGE_URL.AddressInfo} element={<AddressInfo />} />

                <Route path={PAGE_URL.Ticket} element={<Ticket />} />

                <Route path={PAGE_URL.Search} element={<Search />} />
                <Route path={PAGE_URL.Category} element={<Category />} />
                <Route
                  path={PAGE_URL.PopularDetail}
                  element={<Detail type="popular" />}
                />
                <Route
                  path={PAGE_URL.ImminentDetail}
                  element={<Detail type="imminent" />}
                />
                <Route
                  path={PAGE_URL.NewDetail}
                  element={<Detail type="new" />}
                />
                <Route path={PAGE_URL.Bookmark} element={<Bookmark />} />

                <Route path={PAGE_URL.Alarm} element={<Alarm />} />

                <Route path={PAGE_URL.Review} element={<Review />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </AuthRouter>
      </RootRouter>
    </Suspense>
  );
};

export default PageRouter;
