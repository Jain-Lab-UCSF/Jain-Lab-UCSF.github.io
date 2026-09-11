/* ============================================================
   GALLERY
   Photos are hosted in this project at images/gallery/ — nothing
   here depends on Wix any more.

   ORDER: newest download first. The number and timestamp in the
   comment on each line is the order the file was downloaded to
   your computer, so #01 is the most recent and appears first.

   To ADD a photo: put the file in images/gallery/ and add a line
   at the top of the list.
   To REORDER: move lines up or down — the page follows this order.
   To REMOVE: delete the line.

   "caption" shows on hover and is read aloud by screen readers.
   "w" and "h" are the pixel size; they stop the page from jumping
   around while the photos load.
   ============================================================ */

const GALLERY = [
  { src: "images/gallery/01-316e3f3792.webp", w: 1400, h: 1050, caption: "" },   // #1 · downloaded 2026-08-14 15:59:42
  { src: "images/gallery/02-b42e6f66b2.webp", w: 1050, h: 1400, caption: "" },   // #2 · downloaded 2026-08-14 15:59:40
  { src: "images/gallery/03-7827049739.webp", w: 1400, h: 1050, caption: "" },   // #3 · downloaded 2026-08-14 15:59:38
  { src: "images/gallery/04-88f83b68e0.webp", w: 1050, h: 1400, caption: "" },   // #4 · downloaded 2026-08-14 15:59:36
  { src: "images/gallery/05-1501267e4a.webp", w: 1400, h: 1050, caption: "" },   // #5 · downloaded 2026-08-14 15:59:34
  { src: "images/gallery/06-0e4d26081f.webp", w: 1400, h: 1050, caption: "" },   // #6 · downloaded 2026-08-14 15:59:32
  { src: "images/gallery/07-087cde6db7.webp", w: 1400, h: 1050, caption: "" },   // #7 · downloaded 2026-08-14 15:59:31
  { src: "images/gallery/08-2cc02920af.webp", w: 1400, h: 1050, caption: "" },   // #8 · downloaded 2026-08-14 15:59:29
  { src: "images/gallery/09-c302a08296.webp", w: 1400, h: 1050, caption: "" },   // #9 · downloaded 2026-08-14 15:59:27
  { src: "images/gallery/10-d300286ae4.webp", w: 1400, h: 1050, caption: "" },   // #10 · downloaded 2026-08-14 15:59:25
  { src: "images/gallery/11-f79947f4f7.webp", w: 1400, h: 1050, caption: "" },   // #11 · downloaded 2026-08-14 15:59:24
  { src: "images/gallery/12-1937fcd526.webp", w: 1050, h: 1400, caption: "" },   // #12 · downloaded 2026-08-14 15:59:22
  { src: "images/gallery/13-e2c8db220a.webp", w: 1400, h: 1050, caption: "" },   // #13 · downloaded 2026-08-14 15:59:21
  { src: "images/gallery/14-5342cd7b28.webp", w: 1400, h: 1050, caption: "" },   // #14 · downloaded 2026-08-14 15:59:19
  { src: "images/gallery/15-90ec9e8710.webp", w: 1400, h: 1050, caption: "" },   // #15 · downloaded 2026-08-14 15:59:17
  { src: "images/gallery/16-e2a31f55d9.webp", w: 1050, h: 1400, caption: "" },   // #16 · downloaded 2026-08-14 15:59:16
  { src: "images/gallery/17-865cc491c9.webp", w: 1400, h: 1050, caption: "" },   // #17 · downloaded 2026-08-14 15:59:14
  { src: "images/gallery/18-495d2e32f5.webp", w: 1400, h: 1050, caption: "" },   // #18 · downloaded 2026-08-14 15:59:12
  { src: "images/gallery/19-fa3e57d441.webp", w: 720, h: 514, caption: "" },   // #19 · downloaded 2026-08-14 15:59:11
  { src: "images/gallery/20-5ebee5a2e3.webp", w: 1400, h: 1055, caption: "" },   // #20 · downloaded 2026-08-14 15:59:09
  { src: "images/gallery/21-d7b85427bf.webp", w: 1400, h: 1055, caption: "" },   // #21 · downloaded 2026-08-14 15:59:07
  { src: "images/gallery/22-b21414468d.webp", w: 1400, h: 1050, caption: "" },   // #22 · downloaded 2026-08-14 15:59:05
  { src: "images/gallery/23-23b8bf3a85.webp", w: 1400, h: 1050, caption: "" },   // #23 · downloaded 2026-08-14 15:59:03
  { src: "images/gallery/24-01c52b6036.webp", w: 1400, h: 1050, caption: "" },   // #24 · downloaded 2026-08-14 15:59:02
  { src: "images/gallery/25-d14e67b000.webp", w: 1050, h: 1400, caption: "" },   // #25 · downloaded 2026-08-14 15:59:00
  { src: "images/gallery/26-0e38f68ffd.webp", w: 1400, h: 1050, caption: "" },   // #26 · downloaded 2026-08-14 15:58:58
  { src: "images/gallery/27-5cb3b87526.webp", w: 1400, h: 1050, caption: "" },   // #27 · downloaded 2026-08-14 15:58:57
  { src: "images/gallery/28-f93e81eb6e.webp", w: 1054, h: 1400, caption: "" },   // #28 · downloaded 2026-08-14 15:58:55
  { src: "images/gallery/29-4773fc48ac.webp", w: 1400, h: 1050, caption: "" },   // #29 · downloaded 2026-08-14 15:58:53
  { src: "images/gallery/30-791a63f67b.webp", w: 1400, h: 788, caption: "" },   // #30 · downloaded 2026-08-14 15:58:52
  { src: "images/gallery/31-f76aedd42d.webp", w: 1400, h: 1050, caption: "" },   // #31 · downloaded 2026-08-14 15:58:50
  { src: "images/gallery/32-1519a72b65.webp", w: 1400, h: 1050, caption: "" },   // #32 · downloaded 2026-08-14 15:58:48
  { src: "images/gallery/33-5048405851.webp", w: 1050, h: 1400, caption: "" },   // #33 · downloaded 2026-08-14 15:58:46
  { src: "images/gallery/34-bc832805c8.webp", w: 1400, h: 933, caption: "" },   // #34 · downloaded 2026-08-14 15:58:43
  { src: "images/gallery/35-65f42a1942.webp", w: 1050, h: 1400, caption: "" },   // #35 · downloaded 2026-08-14 15:58:41
  { src: "images/gallery/36-646c999d65.webp", w: 1400, h: 933, caption: "" },   // #36 · downloaded 2026-08-14 15:58:39
  { src: "images/gallery/37-1faf561f6e.webp", w: 1400, h: 1050, caption: "" },   // #37 · downloaded 2026-08-14 15:58:38
  { src: "images/gallery/38-c3f287d52a.webp", w: 1400, h: 933, caption: "" },   // #38 · downloaded 2026-08-14 15:58:35
  { src: "images/gallery/39-e6511cf8a3.webp", w: 1400, h: 1050, caption: "" },   // #39 · downloaded 2026-08-14 15:58:34
  { src: "images/gallery/40-63af586c18.webp", w: 1400, h: 1050, caption: "" },   // #40 · downloaded 2026-08-14 15:58:32
  { src: "images/gallery/41-3e059421a9.webp", w: 836, h: 467, caption: "" },   // #41 · downloaded 2026-08-14 15:58:30
  { src: "images/gallery/42-e60a85b259.webp", w: 1400, h: 1050, caption: "" },   // #42 · downloaded 2026-08-14 15:58:28
  { src: "images/gallery/43-4a02d32efa.webp", w: 720, h: 540, caption: "" },   // #43 · downloaded 2026-08-14 15:58:26
  { src: "images/gallery/44-bc0a38717d.webp", w: 1400, h: 931, caption: "" },   // #44 · downloaded 2026-08-14 15:58:24
  { src: "images/gallery/45-e7fd6f4f06.webp", w: 1400, h: 931, caption: "" },   // #45 · downloaded 2026-08-14 15:58:22
  { src: "images/gallery/46-f9bb1ec08f.webp", w: 1050, h: 1400, caption: "" },   // #46 · downloaded 2026-08-14 15:58:20
  { src: "images/gallery/47-dfeb799e7a.webp", w: 1400, h: 1050, caption: "" },   // #47 · downloaded 2026-08-14 15:58:19
  { src: "images/gallery/48-533170fda9.webp", w: 1400, h: 1050, caption: "" },   // #48 · downloaded 2026-08-14 15:58:17
  { src: "images/gallery/49-894f476640.webp", w: 1050, h: 1400, caption: "" },   // #49 · downloaded 2026-08-14 15:58:15
  { src: "images/gallery/50-bac900a358.webp", w: 1400, h: 1050, caption: "" },   // #50 · downloaded 2026-08-14 15:58:13
  { src: "images/gallery/51-5823c2c2c3.webp", w: 1400, h: 1050, caption: "" },   // #51 · downloaded 2026-08-14 15:58:11
  { src: "images/gallery/52-00f790dd69.webp", w: 1267, h: 846, caption: "" },   // #52 · downloaded 2026-08-14 15:58:09
  { src: "images/gallery/53-540ae420f6.webp", w: 1400, h: 1050, caption: "" },   // #53 · downloaded 2026-08-14 15:58:07
  { src: "images/gallery/54-bf8fdcf689.webp", w: 1400, h: 1050, caption: "" },   // #54 · downloaded 2026-08-14 15:58:05
  { src: "images/gallery/55-67d1178497.webp", w: 1400, h: 1050, caption: "" },   // #55 · downloaded 2026-08-14 15:58:03
  { src: "images/gallery/56-a76d28276d.webp", w: 1400, h: 1050, caption: "" },   // #56 · downloaded 2026-08-14 15:58:01
  { src: "images/gallery/57-844babfc3c.webp", w: 1400, h: 848, caption: "" },   // #57 · downloaded 2026-08-14 15:57:59
  { src: "images/gallery/58-706f4217c1.webp", w: 1400, h: 1052, caption: "" },   // #58 · downloaded 2026-08-14 15:57:58
  { src: "images/gallery/59-1d453c6869.webp", w: 1400, h: 1050, caption: "" },   // #59 · downloaded 2026-08-14 15:57:53
  { src: "images/gallery/60-d94707e5a4.webp", w: 1400, h: 1050, caption: "" },   // #60 · downloaded 2026-08-14 15:57:51
  { src: "images/gallery/61-c4e97b3faf.webp", w: 1400, h: 1050, caption: "" },   // #61 · downloaded 2026-08-14 15:57:49
  { src: "images/gallery/62-5671da4f3d.webp", w: 1400, h: 933, caption: "" },   // #62 · downloaded 2026-08-14 15:57:47
  { src: "images/gallery/63-ce0b5af0d6.webp", w: 1400, h: 933, caption: "" },   // #63 · downloaded 2026-08-14 15:57:45
  { src: "images/gallery/64-448ec46ea4.webp", w: 1400, h: 1050, caption: "" },   // #64 · downloaded 2026-08-14 15:57:43
  { src: "images/gallery/65-f4ecc09198.webp", w: 1267, h: 846, caption: "" },   // #65 · downloaded 2026-08-14 15:57:41
  { src: "images/gallery/66-e77613e953.webp", w: 1400, h: 1050, caption: "" },   // #66 · downloaded 2026-08-14 15:57:40
  { src: "images/gallery/67-b8b4bbabd0.webp", w: 1400, h: 1050, caption: "" },   // #67 · downloaded 2026-08-14 15:57:38
  { src: "images/gallery/68-11eb58a46e.webp", w: 1050, h: 1400, caption: "" },   // #68 · downloaded 2026-08-14 15:57:36
  { src: "images/gallery/69-93a2646ee0.webp", w: 1400, h: 1050, caption: "" },   // #69 · downloaded 2026-08-14 15:57:31
  { src: "images/gallery/70-278a0fa488.webp", w: 1267, h: 846, caption: "" },   // #70 · downloaded 2026-08-14 15:57:27
  { src: "images/gallery/71-5b3942c8bd.webp", w: 1267, h: 846, caption: "" },   // #71 · downloaded 2026-08-14 15:57:24
  { src: "images/gallery/72-b7211327d5.webp", w: 1400, h: 1050, caption: "" },   // #72 · downloaded 2026-08-14 15:57:22
  { src: "images/gallery/73-7d5969f42f.webp", w: 1400, h: 1050, caption: "" },   // #73 · downloaded 2026-08-14 15:57:20
  { src: "images/gallery/74-baaf5ad5a6.webp", w: 1352, h: 761, caption: "" },   // #74 · downloaded 2026-08-14 15:57:17
  { src: "images/gallery/75-3d12de4f88.webp", w: 481, h: 640, caption: "" },   // #75 · downloaded 2026-08-14 15:57:14
];
