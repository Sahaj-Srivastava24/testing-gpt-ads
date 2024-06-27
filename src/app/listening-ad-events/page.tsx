"use client"

import { useEffect, useState } from 'react';
import { defineStaticAdSlot, EventDetails, returnEventListeners } from './helpers';

const AdEventListeners = () => {
  const [events, setEvents] = useState<EventDetails[]>([]);
  const [requestedTimestamp, setRequestedTimestamp] = useState<Record<string, number>>({});

  function handleEvent (eventMessage: string, event: any, details: { [key: string]: any } = {}) {
    const slotId = event.slot.getSlotElementId();
    
    setEvents((prev) => [
      ...prev,
      {
        slotId,
        eventMessage,
        details,
        timeFromRequest: Date.now() - (requestedTimestamp[slotId] || 0),
      },
    ]);
  };

  console.log(requestedTimestamp, "requestedTimestamp")

  useEffect(() => {
    function appendEventListeners() {
      const eventListeners = returnEventListeners(handleEvent, setRequestedTimestamp);
      Object.keys(eventListeners).forEach((eventName) => {
        window.googletag.pubads().addEventListener(eventName, eventListeners[eventName]);
      });
      window.googletag.pubads().enableSingleRequest();
      window.googletag.enableServices();
    }

    window.googletag.cmd.push(() => defineStaticAdSlot('/6355419/Travel/Europe', [728, 90], 'ad-slot-1'))
    window.googletag.cmd.push(() => defineStaticAdSlot('/6355419/Travel/Europe', [750, 200], 'ad-slot-2'))
    window.googletag.cmd.push(appendEventListeners)

    window.googletag.cmd.push(() => {
      window.googletag.display('ad-slot-2');
    });
  }, []);

  return (
    <>
    <h1 className='text-center text-xl my-6'>Sample 3 - Listening to Ad Events</h1>
    <article className="h-[90vh] flex items-center justify-between">
      <section className="flex items-center justify-center flex-col gap-8 mt-10">
        <span>Ad slot 1</span>
        <div id="ad-slot-1" className="w-[728px] h-[90px]"></div>

        <span>Ad slot 2</span>
        <div id="ad-slot-2" className="w-[750px] h-[200px]"></div>
      </section>

      <section className='h-full flex flex-col items-between'>
        <div className="inline-table w-[750px]">
          <div className="inline-table w-full">
            <div className="float-left min-w-[15%] font-bold">Slot</div>
            <div className="float-left min-w-[50%] font-bold">Event</div>
            <div className="float-left min-w-[15%] font-bold">Time from ad request</div>
          </div>

          <div className="h-[85vh] overflow-scroll w-full">
            {events.map((event, index) => (
              <div
              key={index}
              className={`inline-table w-full ${index % 2 === 0 ? 'bg-gray-300' : ''}`}
              >
                <div className="float-left min-w-[15%]">{event.slotId}</div>
                <div className="float-left min-w-[50%]">
                  {event.eventMessage}
                  {event.details &&
                    Object.entries(event.details).map(([key, value]) => (
                      <p className="m-0 pl-4" key={key}>
                        {key}: {value}
                      </p>
                    ))}
                </div>
                <div className="float-left min-w-[15%]">{event.timeFromRequest}ms</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
    </>
  );
};

export default AdEventListeners;
