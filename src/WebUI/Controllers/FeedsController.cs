﻿using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SharedPhotoAlbum.Application.Feeds.Commands.CreateFeed;
using SharedPhotoAlbum.Application.Feeds.Queries.GetFeed;

namespace SharedPhotoAlbum.WebUI.Controllers
{
    [Authorize]
    public class FeedsController : ApiController
    {
        [HttpPost]
        public async Task<ActionResult<long>> Create(CreateFeedCommand command)
        {
            return await Mediator.Send(command);
        }

        [HttpGet]
        public async Task<ActionResult<FeedVm>> Get(long? feedId)
        {
            return await Mediator.Send(new GetFeedQuery { FeedId = feedId });
        }
    }
}