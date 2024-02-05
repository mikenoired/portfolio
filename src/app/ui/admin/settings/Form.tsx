"use client";

import { updateSettings } from "@/app/lib/actions";
import { ISettings } from "@/app/lib/definitions";
import Checkbox from "@/app/ui/admin/settings/Checkbox";
import File from "@/app/ui/admin/settings/File";
import Input from "@/app/ui/admin/settings/Input";
import Select from "@/app/ui/admin/settings/Select";

export default function Form({ metaSettings }: { metaSettings: ISettings }) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      await updateSettings(data as ISettings);
      console.log("Data:", data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className='w-full'>
      <h2 className='text-4xl font-bold'>Main</h2>
      <div className='flex flex-wrap items-center w-full mb-5'>
        <Input
          name='metadata.title'
          title='Site title'
          value={metaSettings.metadata.title}
        />
        <Input
          name='metadata.description'
          title='Description'
          value={metaSettings.metadata.description}
          big
        />
        <Select
          value={JSON.parse(metaSettings.metadata.locale)}
          title='Locale'
          name='metadata.locale'
        />
        <Input
          name='metadata.category'
          title='Category'
          value={metaSettings.metadata.category}
        />
        <Input
          name='metadata.keywords'
          big
          title='Keywords'
          value={metaSettings.metadata.keywords.join(" ")}
        />
        <Input
          name='metadata.creator'
          title='Creator name'
          value={metaSettings.metadata.creator}
        />
        <File
          value={metaSettings.metadata.manifest}
          title='Manifest'
          name='metadata.manifest'
        />
      </div>
      <h2 className='text-4xl font-bold'>Robots</h2>
      <div className='flex flex-wrap w-full mb-5'>
        <Checkbox
          value={metaSettings.metadata.robots.index}
          title='Index'
          name='metadata.robots.index'
        />
        <Checkbox
          value={metaSettings.metadata.robots.follow}
          title='Follow'
          name='metadata.robots.follow'
        />
        <Checkbox
          value={metaSettings.metadata.robots.nocache}
          title='No-cache'
          name='metadata.robots.nocache'
        />
      </div>
      <h3 className='text-2xl font-bold'>Google Bot</h3>
      <div className='flex flex-wrap items-center w-full mb-5'>
        <Checkbox
          value={metaSettings.metadata.robots.googleBot.index}
          title='Index'
          name='metadata.robots.googleBot.index'
        />
        <Checkbox
          value={metaSettings.metadata.robots.googleBot.follow}
          title='Follow'
          name='metadata.robots.googleBot.follow'
        />
        <Checkbox
          value={metaSettings.metadata.robots.googleBot.noimageindex}
          title='No image index'
          name='metadata.robots.googleBot.noimageindex'
        />
        <Select
          value={JSON.parse(
            metaSettings.metadata.robots.googleBot[
              "max-video-preview"
            ] as string
          )}
          title='Max video preview'
          name='metadata.robots.googleBot["max-video-preview"]'
        />
        <Select
          value={JSON.parse(
            metaSettings.metadata.robots.googleBot[
              "max-image-preview"
            ] as string
          )}
          title='Max image preview'
          name='metadata.robots.googleBot["max-image-preview"]'
        />
        <Select
          value={JSON.parse(
            metaSettings.metadata.robots.googleBot["max-snippet"] as string
          )}
          title='Max snippet'
          name='metadata.robots.googleBot["max-snippet"]'
        />
      </div>
      <h2 className='text-4xl font-bold'>Icons</h2>
      <div className='flex flex-wrap items-center w-full mb-5'>
        <File
          value={metaSettings.metadata.icons.icon}
          name='metadata.icons.icon'
          title='Icon'
        />
        <File
          value={metaSettings.metadata.icons.apple}
          name='metadata.icons.apple'
          title='Apple'
        />
      </div>
      <h3 className='text-2xl font-bold'>Other</h3>
      <div className='flex flex-wrap items-center w-full mb-5'>
        <Input
          name='metadata.icons.other.rel'
          title='Rel'
          value={metaSettings.metadata.icons.other.rel}
        />
        <File
          value={metaSettings.metadata.icons.other.url}
          name='metadata.icons.other.url'
          title='Icon'
        />
      </div>
      <h2 className='text-4xl font-bold'>Apple Web App</h2>
      <div className='flex flex-wrap items-center w-full mb-5'>
        <Input
          name='metadata.appleWebApp.title'
          title='Title'
          value={metaSettings.metadata.appleWebApp.title}
        />
        <Select
          value={JSON.parse(
            metaSettings.metadata.appleWebApp.statusBarStyle as string
          )}
          title='Status bar style'
          name='metadata.appleWebApp.statusBarStyle'
        />
      </div>
      <h3 className='text-2xl font-bold'>Startup Image</h3>
      <div className='flex flex-wrap items-center w-full mb-5'>
        <File
          value={metaSettings.metadata.appleWebApp.startupImage[0]}
          name='metadata.appleWebApp.startupImage[0]'
          title='Base'
        />
      </div>
      <h4 className='text-xl font-bold'>Device</h4>
      <div className='flex flex-wrap items-center w-full mb-5'>
        <File
          value={metaSettings.metadata.appleWebApp.startupImage[1].url}
          name='metadata.appleWebApp.startupImage[1].url'
          title='Url'
        />
        <Input
          name='metadata.appleWebApp.startupImage[1].media'
          title='Media'
          value={metaSettings.metadata.appleWebApp.startupImage[1].media}
        />
      </div>
      <h2 className='text-4xl font-bold'>Viewport</h2>
      <div className='flex flex-wrap items-center w-full mb-5'>
        <Input
          name='viewport.themeColor'
          title='Theme color'
          value={metaSettings.viewport.themeColor}
        />
        <Input
          name='viewport.width'
          title='Width'
          value={metaSettings.viewport.width}
        />
        <Input
          name='viewport.initialScale'
          title='Init scale'
          numeric
          value={metaSettings.viewport.initialScale}
        />
        <Input
          name='viewport.maximumScale'
          title='Max scale'
          numeric
          value={metaSettings.viewport.maximumScale}
        />
        <Checkbox
          value={metaSettings.viewport.userScalable}
          title='Scalable'
          name='viewport.userScalable'
        />
      </div>
      <button
        type='submit'
        className='w-full bg-white text-black p-4 font-semibold text-lg mt-6'
      >
        Save
      </button>
    </form>
  );
}
