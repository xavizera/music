import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Songs',
        href: '/songs',
    },
];

export default function index() {
    return(
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Songs" />
            Songs
        </AppLayout>
    );
}