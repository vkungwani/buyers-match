// Blog posts are managed through the CMS (/admin) and stored as
// JSON files in src/content/blog/<slug>.json. The file name is the
// post's URL slug, e.g. /blog/why-use-buyers-agent.
type BlogFile = {
    title: string;
    date: string; // YYYY-MM-DD
    image: string;
    excerpt: string;
    body: string; // Markdown
    draft?: boolean;
};

export type Blog = {
    id: string;
    title: string;
    image: string;
    date: string; // formatted for display, e.g. "Feb 10, 2024"
    isoDate: string;
    excerpt: string;
    body: string;
};

const files = import.meta.glob<BlogFile>('../../content/blog/*.json', {
    eager: true,
    import: 'default',
});

const formatDate = (iso: string) => {
    const [y, m, d] = String(iso).slice(0, 10).split('-').map(Number);
    if (!y || !m || !d) return String(iso);
    return new Date(y, m - 1, d).toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
    });
};

export const blogs: Blog[] = Object.entries(files)
    .filter(([, b]) => !b.draft)
    .map(([path, b]) => {
        const id = path.split('/').pop()!.replace(/\.json$/, '');
        const isoDate = String(b.date).slice(0, 10);
        return {
            id,
            title: b.title,
            image: b.image,
            date: formatDate(isoDate),
            isoDate,
            excerpt: b.excerpt,
            body: b.body || '',
        };
    })
    .sort((a, b) => b.isoDate.localeCompare(a.isoDate));

export const blogsData: Record<string, Blog> = Object.fromEntries(
    blogs.map((b) => [b.id, b])
);
