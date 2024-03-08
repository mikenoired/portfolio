"use client";

import { ISettings } from "@/app/lib/definitions";
import { updateMeta } from "@/server/settings";
import Checkbox from "@/app/ui/admin/settings/Checkbox";
import File from "@/app/ui/admin/settings/File";
import Input from "@/app/ui/admin/settings/Input";
import Select from "@/app/ui/admin/settings/Select";

export default function Form({ s }: { s: ISettings }) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      await updateMeta(data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <h2 id="main" className="text-4xl font-bold">
        Main
      </h2>
      <div className="mb-5 flex w-full flex-wrap items-center">
        <Input
          name="metadata.title"
          title="Site title"
          value={s.metadata.title}
        />
        <Input
          name="metadata.description"
          title="Description"
          value={s.metadata.description}
          big
        />
        <Select
          value={s.metadata.locale}
          title="Locale"
          name="metadata.locale"
        />
        <Input
          name="metadata.category"
          title="Category"
          value={s.metadata.category}
        />
        <Input
          name="metadata.keywords"
          big
          title="Keywords"
          value={s.metadata.keywords}
        />
        <Input
          name="metadata.creator"
          title="Creator name"
          value={s.metadata.creator}
        />
        <File
          value={s.metadata.manifest}
          title="Manifest"
          name="metadata.manifest"
        />
      </div>
      <h2 id="robots" className="text-4xl font-bold">
        Robots
      </h2>
      <div className="mb-5 flex w-full flex-wrap">
        <Checkbox
          value={s.metadata.robots.index}
          title="Index"
          name="metadata.robots.index"
        />
        <Checkbox
          value={s.metadata.robots.follow}
          title="Follow"
          name="metadata.robots.follow"
        />
        <Checkbox
          value={s.metadata.robots.nocache}
          title="No-cache"
          name="metadata.robots.nocache"
        />
      </div>
      <h3 id="google" className="text-2xl font-bold">
        Google Bot
      </h3>
      <div className="mb-5 flex w-full flex-wrap items-center">
        <Checkbox
          value={s.metadata.robots.googleBot.index}
          title="Index"
          name="metadata.robots.googleBot.index"
        />
        <Checkbox
          value={s.metadata.robots.googleBot.follow}
          title="Follow"
          name="metadata.robots.googleBot.follow"
        />
        <Checkbox
          value={s.metadata.robots.googleBot.noimageindex}
          title="No image index"
          name="metadata.robots.googleBot.noimageindex"
        />
        <Select
          value={s.metadata.robots.googleBot.maxVideoPreview}
          title="Max video preview"
          name="metadata.robots.googleBot.maxVideoPreview"
        />
        <Select
          value={s.metadata.robots.googleBot.maxImagePreview}
          title="Max image preview"
          name="metadata.robots.googleBot.maxImagePreview"
        />
        <Select
          value={s.metadata.robots.googleBot.maxSnippet}
          title="Max snippet"
          name="metadata.robots.googleBot.maxSnippet"
        />
      </div>
      <h2 id="icons" className="text-4xl font-bold">
        Icons
      </h2>
      <div className="mb-5 flex w-full flex-wrap items-center">
        <File
          value={s.metadata.icons.icon}
          name="metadata.icons.icon"
          title="Icon"
        />
        <File
          value={s.metadata.icons.apple}
          name="metadata.icons.apple"
          title="Apple"
        />
      </div>
      <h3 className="text-2xl font-bold">Other</h3>
      <div className="mb-5 flex w-full flex-wrap items-center">
        <Input
          name="metadata.icons.other.rel"
          title="Rel"
          value={s.metadata.icons.other.rel}
        />
        <File
          value={s.metadata.icons.other.url}
          name="metadata.icons.other.url"
          title="Icon"
        />
      </div>
      <h2 id="apple" className="text-4xl font-bold">
        Apple Web App
      </h2>
      <div className="mb-5 flex w-full flex-wrap items-center">
        <Input
          name="metadata.appleWebApp.title"
          title="Title"
          value={s.metadata.appleWebApp.title}
        />
        <Select
          value={s.metadata.appleWebApp.statusBarStyle}
          title="Status bar style"
          name="metadata.appleWebApp.statusBarStyle"
        />
      </div>
      <h3 className="text-2xl font-bold">Startup Image</h3>
      <div className="mb-5 flex w-full flex-wrap items-center">
        <File
          value={s.metadata.appleWebApp.startupImage[0]}
          name="metadata.appleWebApp.startupImage[0]"
          title="Base"
        />
      </div>
      <h4 className="text-xl font-bold">Device</h4>
      <div className="mb-5 flex w-full flex-wrap items-center">
        <File
          value={s.metadata.appleWebApp.startupImage[1].url}
          name="metadata.appleWebApp.startupImage[1].url"
          title="Url"
        />
        <Input
          name="metadata.appleWebApp.startupImage[1].media"
          title="Media"
          value={s.metadata.appleWebApp.startupImage[1].media}
        />
      </div>
      <h2 id="viewport" className="text-4xl font-bold">
        Viewport
      </h2>
      <div className="mb-5 flex w-full flex-wrap items-center">
        <Input
          name="viewport.themeColor"
          title="Theme color"
          value={s.viewport.themeColor}
        />
        <Input name="viewport.width" title="Width" value={s.viewport.width} />
        <Input
          name="viewport.initialScale"
          title="Init scale"
          numeric
          value={s.viewport.initialScale}
        />
        <Input
          name="viewport.maximumScale"
          title="Max scale"
          numeric
          value={s.viewport.maximumScale}
        />
        <Checkbox
          value={s.viewport.userScalable}
          title="Scalable"
          name="viewport.userScalable"
        />
      </div>
      <button
        type="submit"
        className="mt-6 w-full bg-white p-4 text-lg font-semibold text-black"
      >
        Save
      </button>
    </form>
  );
}
