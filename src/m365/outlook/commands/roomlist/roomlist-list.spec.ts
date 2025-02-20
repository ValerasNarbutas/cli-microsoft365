import * as assert from 'assert';
import * as sinon from 'sinon';
import { telemetry } from '../../../../telemetry';
import auth from '../../../../Auth';
import { Logger } from '../../../../cli/Logger';
import Command, { CommandError } from '../../../../Command';
import request from '../../../../request';
import { pid } from '../../../../utils/pid';
import { session } from '../../../../utils/session';
import { sinonUtil } from '../../../../utils/sinonUtil';
import commands from '../../commands';
const command: Command = require('./roomlist-list');

describe(commands.ROOMLIST_LIST, () => {
  let log: string[];
  let logger: Logger;
  let loggerLogSpy: sinon.SinonSpy;

  const jsonOutput = {
    "value": [
      {
        "id": "DC404124-302A-92AA-F98D-7B4DEB0C1705",
        "displayName": "Building 1",
        "address": {
          "street": "4567 Main Street",
          "city": "Buffalo",
          "state": "NY",
          "postalCode": "98052",
          "countryOrRegion": "USA"
        },
        "geocoordinates": null,
        "phone": null,
        "emailAddress": "bldg1@contoso.com"
      },
      {
        "id": "DC404124-302A-92AA-F98D-7B4DEB0C1706",
        "displayName": "Building 2",
        "address": {
          "street": "4567 Main Street",
          "city": "Buffalo",
          "state": "NY",
          "postalCode": "98052",
          "countryOrRegion": "USA"
        },
        "geocoordinates": null,
        "phone": null,
        "emailAddress": "bldg2@contoso.com"
      }
    ]
  };

  before(() => {
    sinon.stub(auth, 'restoreAuth').callsFake(() => Promise.resolve());
    sinon.stub(telemetry, 'trackEvent').callsFake(() => { });
    sinon.stub(pid, 'getProcessName').callsFake(() => '');
    sinon.stub(session, 'getId').callsFake(() => '');
    auth.service.connected = true;
  });

  beforeEach(() => {
    log = [];
    logger = {
      log: (msg: string) => {
        log.push(msg);
      },
      logRaw: (msg: string) => {
        log.push(msg);
      },
      logToStderr: (msg: string) => {
        log.push(msg);
      }
    };
    loggerLogSpy = sinon.spy(logger, 'log');
    (command as any).items = [];
  });

  afterEach(() => {
    sinonUtil.restore([
      request.get
    ]);
  });

  after(() => {
    sinonUtil.restore([
      auth.restoreAuth,
      telemetry.trackEvent,
      pid.getProcessName,
      session.getId
    ]);
    auth.service.connected = false;
  });

  it('has correct name', () => {
    assert.strictEqual(command.name.startsWith(commands.ROOMLIST_LIST), true);
  });

  it('has a description', () => {
    assert.notStrictEqual(command.description, null);
  });

  it('defines correct properties for the default output', () => {
    assert.deepStrictEqual(command.defaultProperties(), ['id', 'displayName', 'phone', 'emailAddress']);
  });

  it('lists all available roomlist in the tenant (verbose)', async () => {
    sinon.stub(request, 'get').callsFake((opts) => {
      if (opts.url === `https://graph.microsoft.com/v1.0/places/microsoft.graph.roomlist`) {
        return Promise.resolve(
          jsonOutput
        );
      }
      return Promise.reject('Invalid request');
    });

    await command.action(logger, { options: { verbose: true } });
    assert(loggerLogSpy.calledWith(
      jsonOutput.value
    ));
  });

  it('handles random API error', async () => {
    const errorMessage = 'Something went wrong';
    sinon.stub(request, 'get').callsFake(async () => { throw errorMessage; });

    await assert.rejects(command.action(logger, { options: { confirm: true } }), new CommandError(errorMessage));
  });
});
