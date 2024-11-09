import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

function StartupCard({ post }: { post: StartupCardType }) {
  const {
    _createdAt,
    views,
    author: { _id: authorId, name: authorName },
    image,
    title,
    category,
    _id,
    description,
  } = post;
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="text-16-medium line-clamp-1">{authorName}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            src={"https://placehold.co/48x48"}
            width={48}
            height={48}
            alt="placeholder"
            className="rounded-full"
            unoptimized
            unselectable="off"
          />
        </Link>
      </div>

      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>

        <Image
          src={image}
          alt="placeholder"
          width={144}
          height={70}
          className="startup-card_img"
          loading="lazy"
        />
      </Link>

      <div className="flex-between mt-5 gap-3">
        <Link
          href={{
            pathname: "/",
            query: {
              query: category.toLowerCase(),
            },
          }}
        >
          <p className="text-16-medium line-clamp-1">{category}</p>
        </Link>

        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
}

export default StartupCard;
