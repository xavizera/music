import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { type Song } from "@/types";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Songs',
        href: '/songs',
    },
];

export default function index({ songs }: { songs: Song[] }) {
    return(
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Songs" />
            <div>
                <Table className={'mt-4'}>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Songs</TableHead>
                            <TableHead className="w-[150px] text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {songs.map((song) => (
                            <TableRow key={song.id}>
                                <TableCell>{song.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </AppLayout>
    );
}
