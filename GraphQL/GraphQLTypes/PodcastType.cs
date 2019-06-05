using System;
using iCast.Models;
using GraphQL.Types;
using iCast.Services;

namespace iCast.GraphQL.GraphQLTypes
{
    public class PodcastType : ObjectGraphType<Podcast>
    {
        public PodcastType(IAuthorService authors, IEpisodeService episodes)
        {
            Field(p => p.Id, type: typeof(IdGraphType)).Description("Id");
            Field(p => p.Title, type: typeof(IdGraphType)).Description("Title");
            Field(p => p.Url, type: typeof(IdGraphType)).Description("Url");
            Field(p => p.Description, type: typeof(IdGraphType)).Description("Description");
            Field(p => p.Category, type: typeof(IdGraphType)).Description("Category");
            Field(p => p.ImgSrc, type: typeof(IdGraphType)).Description("ImgSrc");
            Field(p => p.Subscribers, type: typeof(IdGraphType)).Description("Subscribers");
            Field<AuthorType>("author",
                resolve: context => authors.GetAuthorById(context.Source.AuthorId));
            Field<ListGraphType<EpisodeType>>("episodes",
                resolve: context => episodes.GetEpisodesByPodcastId(context.Source.Id));
        }
    }
}
