# Fernando Bali Tour - Routing Reference

## Valid Tour Slugs (Linked in UI)

### One Day Tours (ToursSection)
- ✓ `kintamani-ubud` - Kintamani Volcano and Ubud Culture Tour
- ✓ `gate-of-heaven` - Gate of Heaven & Mother Temple Spiritual Tour  
- ✓ `ubud-instagram` - Bali Ubud Instagram Trip / Best of Ubud Tour
- ✓ `tanah-lot-sunset` - Halfday Taman Ayun Royal Temple + Tanah Lot Sunset Tour
- ✓ `lovina-dolphin` - Lovina Dolphin Watching & North Bali Tour

### Nusa Penida Tours (NusaPenidaSection)
- ✓ `nusa-penida-west` - Private Day Tour: West Nusa Penida Trip from Bali
- ✓ `nusa-penida-ultimate` - Nusa Penida Ultimate Island Tour
- ✓ `nusa-penida-snorkeling` - Nusa Penida Snorkeling Adventure
- ✓ `nusa-penida-east` - East Nusa Penida Day Trip

### Activities (ActivitiesSection)
- ✓ `mount-batur-jeep` - Mount Batur Jeep Sunrise
- ✓ `quad-bike-adventure` - Village Trail Quad Bike Adventure
- ✓ `batur-hot-spring` - Batur Volcano Sunrise and Hot Spring Experience
- ✓ `waterfall-adventure` - Hidden Waterfall & Jungle Adventure

## Error Handling Pages

### Global Error Pages
- `/app/not-found.tsx` - Global 404 page (fallback for any not found routes)
- `/app/error.tsx` - Global error boundary (catches runtime errors)
- `/app/tour/not-found.tsx` - Tour-specific 404 page

### Tour Detail Page
- `/app/tour/[slug]/page.tsx` - Uses `notFound()` when tour slug doesn't exist
- Automatically triggers `/app/tour/not-found.tsx` when route is invalid

## Fixed Issues

1. ✓ Removed invalid slug: `best-ubud-swing` (replaced with `ubud-instagram`)
2. ✓ Removed invalid slug: `uluwatu-kecak` (was not in detail page)
3. ✓ Fixed Nusa Penida slugs: `west-nusa-penida` → `nusa-penida-west`
4. ✓ Fixed Nusa Penida slugs: `east-nusa-penida` → `nusa-penida-east`
5. ✓ Fixed waterfall slug: `waterfall-tour` → `waterfall-adventure`
6. ✓ Created 404 pages for graceful error handling
7. ✓ Created error boundary for runtime errors
8. ✓ All tour links now point to valid, existing tour detail pages
