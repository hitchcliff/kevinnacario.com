import { Client } from '..';
import { PortfolioTypes } from '../../app/SinglePortfolio/types';
import { addPortfolioItems } from '../../features/Portfolio/portfolio.slice';
import { sluggify } from '../../helpers/Sluggify';
import Store from '../../Store';

export default class PortfolioService {
  async getPortfolioItems() {
    const { items } = (await Client.getEntries({
      content_type: 'portfolio',
    })) as any;

    const formattedData: PortfolioTypes[] = items.map((item: any) => {
      return {
        id: item.sys.id,
        title: item.fields.title,
        slug: sluggify(item.fields.title),
        mockup: item.fields.mockup.fields.file.url,
        website_url: item.fields.websiteUrl,
        tags: item.fields.tags,
        date_finished: item.fields.dateFinished,
        overview: item.fields.overview,
        images: item.fields.images.map((item: any) => item.fields.file.url),
        concept_description: item.fields.conceptDescription,
        video_url: item.fields.videoUrl,
        video_description: item.fields.videoDescription,
        github_url: item.fields.githubUrl,
      };
    });

    Store.dispatch(addPortfolioItems(formattedData));
  }
}
