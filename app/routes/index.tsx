import {createFileRoute} from '@tanstack/react-router'
import {Button} from "@/components/ui/button";
import {MinusCircle, PlusCircle} from "lucide-react";

export const Route = createFileRoute('/')({
    component: Home,
})

function Home() {

    return (
        <div className="h-svh w-svw flex flex-col gap-8 justify-center items-center">
            <div className="flex gap-4">
                <Button size="lg">
                    <PlusCircle/>
                    Increase
                </Button>
                <Button size="lg">
                    <MinusCircle/>
                    Decrease
                </Button>
            </div>

        </div>
    )
}