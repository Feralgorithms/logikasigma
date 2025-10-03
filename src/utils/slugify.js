export default function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // spasi jadi -
    .replace(/[^\w\-]+/g, '')       // hapus karakter non-alfanumerik
    .replace(/\-\-+/g, '-');        // ganti -- menjadi -
}
