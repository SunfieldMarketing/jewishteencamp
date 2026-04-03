// ─── Cloudinary base ────────────────────────────────────────────────────────
const CLD = 'https://res.cloudinary.com/dai2pg27n/image/upload';

// Helper: auto-optimize via Cloudinary transformations
export const img = (id, w = 800) =>
  `${CLD}/w_${w},c_fill,q_auto,f_auto/${id}`;

export const thumb = (id) => img(id, 600);
export const hero  = (id) => img(id, 1400);

// ─── Special featured photos ─────────────────────────────────────────────────
// ─── Special featured photos ─────────────────────────────────────────────────
// aboutPhoto  → home page "About CJT" section visual
export const aboutPhoto =
  'v1775248027/Screenshot_2026-04-03_162553_xodsyd.png';

// featuredPhoto → homepage hero card, about page, day-camp page, parents page
export const featuredPhoto =
  'v1775253775/Gemini_Generated_Image_64hhlr64hhlr64hh_jynedr.png';

// ─── Staff Portraits ─────────────────────────────────────────────────────────
export const staffScheiman = 'v1775251524/00d2c40a-a61e-45aa-9c5e-8b4f85a6ef6d.png';
export const staffNotik = 'v1775251595/fa92c008-22a2-495f-bb41-3a325d1a382b.png';
export const staffGoldshmidt = 'v1775251601/31855b95-9ff7-4b8d-90c2-b21f818a0fce.png';

// ─── Full gallery pool (75 photos) ───────────────────────────────────────────
export const allPhotos = [
  // --- first two special ones also appear in the gallery ---
  { id: 'v1775253116/Jewish_camp_upscaled_qfnody.png',   cat: 'Camp Life',   alt: 'Chicago Jewish Teens group photo' },
  { id: 'v1775248027/Screenshot_2026-04-03_162553_xodsyd.png',   cat: 'Camp Life',   alt: 'Chicago Jewish Teens campers' },

  { id: 'v1775248130/Screenshot_2026-04-03_162841_hcgihx.png',   cat: 'Trips',      alt: 'Camp outing' },
  { id: 'v1775248185/Screenshot_2026-04-03_162934_ogxwjq.png',   cat: 'Adventures',  alt: 'Outdoor adventure trip' },
  { id: 'v1775248258/326ba55d-5dbd-401a-8c9d-04308c6da179.png',  cat: 'Adventures',  alt: 'Hiking trip' },
  { id: 'v1775248304/c3cff064-9b8f-4df7-bcb9-c7b62b81c3b4.png',  cat: 'Sports',      alt: 'Athletics and team sports' },
  { id: 'v1775248342/578f110d-990b-4f72-9434-ad885f218eff.png',  cat: 'Adventures',  alt: 'Off-road adventure' },
  { id: 'v1775248369/b05eb48e-e201-454b-9a2c-b06257d13098.png',  cat: 'Adventures',  alt: 'Out-of-state adventure' },
  { id: 'v1775248406/a509d611-16ac-43c6-9d5a-0785e7483c83.png',  cat: 'Adventures',  alt: 'Monument Valley trip' },
  { id: 'v1775248461/62679844-e95c-4de2-ad10-cc0f4dd0c28a.png',  cat: 'Camp Life',   alt: 'Camp group activities' },
  { id: 'v1775248511/d62d8c9c-0ec1-4dd5-8123-f55a70c3ff29.png',  cat: 'Culture',     alt: 'Outdoor adventure' },
  { id: 'v1775248498/068fc9ca-3d78-48ce-9cc9-8d96eba82b60.png',  cat: 'Sports',      alt: 'Camp sports' },
  { id: 'v1775248554/3f878da7-ce17-4448-ac6c-ee88780347a9.png',  cat: 'Adventures',  alt: 'Horseback riding' },
  { id: 'v1775248583/aecd97da-58ca-4401-99e7-51fad4d62eb5.png',  cat: 'Culture',     alt: 'Shabbat celebration' },
  { id: 'v1775248626/b3533b8c-0279-4224-9455-a07448982816.png',  cat: 'Adventures',  alt: 'Trip activity' },
  { id: 'v1775248666/165abff8-c3b1-43a5-b415-d11fe4ab8e87.png',  cat: 'Adventures',  alt: 'Adventure activity' },
  { id: 'v1775248680/5b9a4e14-3010-4c34-8a4d-350079743832.png',  cat: 'Camp Life',   alt: 'Camp life moments' },
  { id: 'v1775248735/8cdac1a0-379f-4db0-b8de-577b31834bba.png',  cat: 'Sports',      alt: 'Athletic activities' },
  { id: 'v1775248738/bc7495c2-1b37-4626-9b92-f76bbdec4fe7.png',  cat: 'Adventures',  alt: 'Day trip fun' },
  { id: 'v1775248790/ac1f08e8-d806-41a6-9f43-0b490c85f858.png',  cat: 'Camp Life',   alt: 'Campers at camp' },
  { id: 'v1775248793/e9bd4c5b-96f1-4c40-82e8-5d55ba1f1dc8.png',  cat: 'Adventures',  alt: 'Adventure trip' },
  { id: 'v1775248828/f16d6a82-9f8b-4938-bc65-de4cc5573643.png',  cat: 'Culture',     alt: 'Jewish heritage activity' },
  { id: 'v1775248840/0b223402-2644-4558-879d-b192ee300702.png',  cat: 'Sports',      alt: 'Sports competition' },
  { id: 'v1775248880/818c56bc-3fac-4532-aa2d-c09f873d49f5.png',  cat: 'Camp Life',   alt: 'Fun at camp' },
  { id: 'v1775248908/c0dd1615-9d4d-42eb-bc41-57fccc53e7a2.png',  cat: 'Trips',       alt: 'Camp excursion' },
  { id: 'v1775248935/fa487b4e-bdae-4368-97cb-5ae0eb6802ae.png',  cat: 'Adventures',  alt: 'Outdoor challenge' },
  { id: 'v1775248956/b017ca4c-6942-46b4-b3e8-4cf396da7071.png',  cat: 'Sports',      alt: 'Sports and fitness' },
  { id: 'v1775248978/ebfb2c65-b000-42ce-8e64-75614dc9c8b8.png',  cat: 'Camp Life',   alt: 'Camp camaraderie' },
  { id: 'v1775249020/690c7a11-f6eb-4dc4-9bfc-e0ea34231fd5.png',  cat: 'Culture',     alt: 'Jewish programming' },
  { id: 'v1775249065/5c4e6427-bc3d-4807-90e5-08445dbb99c6.png',  cat: 'Adventures',  alt: 'Hiking and nature' },
  { id: 'v1775249125/499537d0-4a9b-4f41-9f87-35ebba0d6d60.png',  cat: 'Trips',       alt: 'Special trip' },
  { id: 'v1775249131/ed993a5d-91ce-4922-9ee7-ff0fe31fc6fd.png',  cat: 'Camp Life',   alt: 'Camp group moment' },
  { id: 'v1775249162/6be5fd99-6844-425f-a5c6-1144f7ce7562.png',  cat: 'Sports',      alt: 'Team sports' },
  { id: 'v1775249195/272006f5-592f-442d-8e9b-629ac5c50651.png',  cat: 'Adventures',  alt: 'Extreme adventure' },
  { id: 'v1775249228/45cbeb0a-c4e3-4e2f-af29-c2fe893ea4ff.png',  cat: 'Culture',     alt: 'Cultural celebration' },
  { id: 'v1775249260/1807f239-8741-47a5-9498-bb869d58e298.png',  cat: 'Camp Life',   alt: 'Camper memories' },
  { id: 'v1775249315/e430b97c-93c2-4b7a-93aa-37791b97aea8.png',  cat: 'Trips',       alt: 'Group trip photo' },
  { id: 'v1775249318/1dd16afb-a313-4f64-b3af-65a9e8b80c2a.png',  cat: 'Sports',      alt: 'Sports day' },
  { id: 'v1775249359/1dd532d6-b80b-4c04-9f95-59a9d2c94620.png',  cat: 'Adventures',  alt: 'Action adventure' },
  { id: 'v1775249362/4952556f-c5cb-4e83-8bf1-f26e4cf9be31.png',  cat: 'Camp Life',   alt: 'Life at camp' },
  { id: 'v1775249421/51b814f0-f175-44c2-94d9-bb365580bed8.png',  cat: 'Culture',     alt: 'Jewish learning' },
  { id: 'v1775249455/04d5a009-3b2f-40f6-8106-be7b5ac8dce4.png',  cat: 'Culture',     alt: 'Athletic training' },
  { id: 'v1775249482/eddf93cc-838a-44f7-be41-83520e69d711.png',  cat: 'Trips',       alt: 'Trip adventure' },
  { id: 'v1775249506/7d943335-410e-4862-a275-0c35ff2df693.png',  cat: 'Camp Life',   alt: 'Camp friends' },
  { id: 'v1775249563/41f8da97-9b07-4799-906c-d54997a52885.png',  cat: 'Adventures',  alt: 'Nature adventure' },
  { id: 'v1775249630/893a9d77-78b7-4a80-97b4-44df36a8f59b.png',  cat: 'Culture',     alt: 'Sports league' },
  { id: 'v1775249681/ed554b77-acae-4b67-ae8e-f6344407168f.png',  cat: 'Culture',     alt: 'Jewish culture program' },
  { id: 'v1775249721/250ecbc7-993c-4bb0-93d2-74b6f277c4b5.png',  cat: 'Culture',     alt: 'Day trip' },
  { id: 'v1775249745/a1c9944a-d25a-48c3-97ac-964868b2e652.png',  cat: 'Camp Life',   alt: 'Camp memories' },
  { id: 'v1775249769/77f1eb1b-206f-4846-a6da-c4d3b59e9383.png',  cat: 'Adventures',  alt: 'Outdoor fun' },
  { id: 'v1775249810/9ce0c29f-f2e1-4b3e-b9f5-ed22cc692824.png',  cat: 'Sports',      alt: 'Sports activities' },
  { id: 'v1775249842/b3eec1fe-af01-4092-aab0-9f1a2f5d6ae7.png',  cat: 'Camp Life',   alt: 'Group bonding' },
  { id: 'v1775249891/27fcf1cb-f59e-4fcf-a907-e3860714bd4f.png',  cat: 'Trips',       alt: 'Adventure trip' },
  { id: 'v1775249941/bb95d3b2-b29c-4708-aec3-95584e18ab5c.png',  cat: 'Culture',     alt: 'Shabbaton experience' },
  { id: 'v1775249984/296bb1a4-3f69-43b1-a0ed-5915d8b32eaa.png',  cat: 'Adventures',  alt: 'Extreme activity' },
  { id: 'v1775250022/2eacf17c-1d1e-40c5-992d-be6ae8c7cc72.png',  cat: 'Sports',      alt: 'Team competition' },
  { id: 'v1775250048/f3f37183-1c9c-4ae7-a9ac-00f5bb8f32bb.png',  cat: 'Camp Life',   alt: 'Camp spirit' },
  { id: 'v1775250094/d1ca0af9-f681-4c64-984b-4725c17b03ee.png',  cat: 'Trips',       alt: 'Excursion memories' },
  { id: 'v1775250105/f513d4c5-f676-4375-9b02-951ebaecc930.png',  cat: 'Adventures',  alt: 'Adventure day' },
  { id: 'v1775250158/51ba8bdd-870c-4231-b219-492b73e78d08.png',  cat: 'Culture',     alt: 'Cultural programming' },
  { id: 'v1775250194/f1009018-cf89-49e7-894e-00e0bd877afa.png',  cat: 'Sports',      alt: 'Athletic excellence' },
  { id: 'v1775250287/a91226da-42c1-4a16-97ab-eddc6fc64dec.png',  cat: 'Camp Life',   alt: 'Campers smiling' },
  { id: 'v1775250312/05c16fad-cedf-49fa-a083-f4642e71d943.png',  cat: 'Trips',       alt: 'Group outing' },
  { id: 'v1775250371/45edcf91-ccd7-423c-8e38-f832b23879d8.png',  cat: 'Adventures',  alt: 'Adrenaline adventure' },
  { id: 'v1775250396/868fb429-325a-474d-aa5a-4dcac79d58ed.png',  cat: 'Culture',     alt: 'Sports day fun' },
  { id: 'v1775250440/c5594e64-4ae7-4cb5-a3e1-53a4091b9be2.png',  cat: 'Culture',     alt: 'Summer camp life' },
  { id: 'v1775250475/498dfe09-6851-4915-a2eb-ad8c3aa3a341.png',  cat: 'Culture',     alt: 'Jewish identity' },
  { id: 'v1775250499/f7e55aa0-e9a1-4640-b4cd-f970184ea5fa.png',  cat: 'Trips',       alt: 'Travel adventure' },
  { id: 'v1775250533/10f549f7-6d04-4b72-b52c-1b4036b22e18.png',  cat: 'Adventures',  alt: 'Team challenge' },
  { id: 'v1775250566/f56e7758-e8ce-4d4c-84f6-1df648c52dfe.png',  cat: 'Culture',     alt: 'Sports league game' },
  { id: 'v1775250606/7fa1999c-4384-411f-b43c-6991cb264dbc.png',  cat: 'Camp Life',   alt: 'Camp energy' },
  { id: 'v1775250628/63878466-d075-4a1f-ae8a-56ccb2c07d07.png',  cat: 'Culture',     alt: 'Heritage program' },
  { id: 'v1775250657/f8d2f89c-bb4a-47c0-ab48-3e0f940c37b6.png',  cat: 'Trips',       alt: 'Camp field trip' },
  { id: 'v1775250723/dd74ad25-21bc-456a-9657-c48e87fa3fe4.png',  cat: 'Adventures',  alt: 'Bold adventure' },
  { id: 'v1775250741/aa08243c-54a5-40a4-a34a-d438003eae3e.png',  cat: 'Sports',      alt: 'Sports activities' },
  { id: 'v1775250748/44a54050-0a8b-4106-a90a-c8bc7f762ece.png',  cat: 'Camp Life',   alt: 'Memorable summer' },
];

// Slices for different page uses
export const heroGallery    = allPhotos.slice(0, 6);
export const homepageGallery = allPhotos.slice(0, 8);
export const adventurePhotos = allPhotos.filter(p => p.cat === 'Adventures');
export const sportsPhotos    = allPhotos.filter(p => p.cat === 'Sports');
export const culturePhotos   = allPhotos.filter(p => p.cat === 'Culture');
export const tripPhotos      = allPhotos.filter(p => p.cat === 'Trips');
export const campLifePhotos  = allPhotos.filter(p => p.cat === 'Camp Life');
