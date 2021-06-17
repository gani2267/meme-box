import {TwitchEventTypes} from './types';

// TODO merge App / Server Endpoint CONSTANTS

export const ENDPOINTS = {
  CLIPS: 'clips',
  TAGS: 'tags',
  SCREEN: 'screen',
  OBS_CLIPS: 'clips',
  ERROR: 'error',
  CONFIG: 'config',
  STATE: 'state',

  TWITCH_EVENTS: 'twitch_events',
  TIMED_EVENTS: 'timed_events',
  TWITCH_TRIGGER: 'twitch_events/trigger',
  NETWORK_LIST: 'network_ip_list',
  CONFIG_TWITCH_CHANNEL: 'config/twitchChannel',
  CONFIG_TWITCH_BOT_INTEGRATION: 'config/twitchBotIntegration',
  CONFIG_TWITCH_BOT: 'config/twitchBot',
  CONFIG_TWITCH_LOG: 'config/twitchLog',
  CONFIG_CUSTOM_PORT_PATH: 'config/customPort'
}

export const CONFIG_TWITCH_CHANNEL_PATH = '/twitchChannel';
export const CONFIG_TWITCH_LOG_PATH = '/twitchLog';
export const CONFIG_TWITCH_BOT_INTEGRATION_PATH = '/twitchBotIntegration';
export const CONFIG_TWITCH_BOT_PATH = '/twitchBot';
export const CONFIG_CUSTOM_PORT_PATH = '/customPort';
export const CONFIG_OPEN_PATH = `/open`;


export const TwitchTypesArray = [
  // TwitchEventTypes.follow,
  // TwitchEventTypes.sub,
  TwitchEventTypes.bits,
  // TwitchEventTypes.channelPoints,
  // TwitchEventTypes.host,
  TwitchEventTypes.message,
  TwitchEventTypes.raid,
];
