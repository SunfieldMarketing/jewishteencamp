import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import {
  WavesIcon, SportsIcon, PaletteIcon, TentIcon, StarOfDavidIcon,
  MartialArtsIcon, FishingIcon, MountainIcon, BookOpenIcon,
  TrophyIcon, UsersIcon, GlobeIcon, LockIcon, HandshakeIcon, StarIcon,
  PersonIcon, ChatIcon, MapPinIcon, PhoneIcon, MailIcon,
} from '../components/Icons';
import ShimmerButton from '../components/ui/shimmer-button';
import NumberTicker from '../components/ui/number-ticker';
import Marquee from '../components/ui/marquee';
import BlurFade from '../components/ui/blur-fade';
import BorderBeam from '../components/ui/border-beam';
import Spotlight from '../components/ui/spotlight';
import { aboutPhoto, featuredPhoto, homepageGallery, allPhotos, img, thumb, staffScheiman, staffNotik, staffGoldshmidt } from '../lib/photos';

export const metadata = {
  title: 'Chicago Jewish Teens | Jewish Day Camp Northbrook IL - Ages 12-17',
  description:
    'Chicago Jewish Teens is the premier Jewish day camp for teens ages 12-17 in Northbrook, IL. Adventures, sports, overnight trips, Shabbatons, Bar Mitzvah prep, and authentic Jewish culture. Enroll today!',
};


import client from "../tina/__generated__/client";
import HomeClient from "./home-client";

export default async function HomePage() {
  const res = await client.queries.page({ relativePath: "home.md" });
  return <HomeClient props={res} />;
}
