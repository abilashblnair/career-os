// Each row corresponds to the platform's 50 stable library questions, in order.
// First choice is the keyed answer; the UI shuffles options on every attempt.
const quizChoices={};
quizChoices.ios=`
Independent value semantics when shared identity is unnecessary|Shared identity for every model|Inheritance for all UI state
Inspect ownership and use weak where lifetime may end|Use unowned for every capture|Disable ARC for the owner
Scoped children coordinate lifetime and cancellation|Every Task is a scoped child|Await always creates a background thread
Recheck state after an await suspension|Actor methods remain atomic across await|Actors eliminate every logical race
Isolate UI and transfer safe values|Sendable means always on main thread|MainActor makes heavy work free
Choose wrappers by ownership and observation model|ObservedObject always owns its model|Binding creates independent storage
Use stable IDs and own cancellable effects|Generate a new ID every render|Perform network calls in body
Measure release launch and allocations on real devices|Optimize from debug timing alone|Treat compressed image bytes as memory use
Inject small behavior contracts|Create protocols for every class|Expose all implementation details
Existential holds conformers; opaque hides one concrete type|Opaque changes concrete type each return|Existential removes all runtime costs
Model exclusive cases with associated data|Use unrelated loading booleans only|Treat failure as successful content
Escaping describes a potentially longer lifetime|Escaping means background-thread execution|Nonescaping means no captured values
Throws propagates; Result stores an outcome|Result always replaces throws|Throws cannot work with async
Validate required fields and evolution cases|Codable proves business correctness|Force every optional field to exist
Share storage until mutation requires independence|Every assignment eagerly clones all bytes|Every struct is guaranteed stack-only
Encapsulate explicit repeated property behavior|Hide network requests in every getter|Assume wrappers automatically synchronize
Expose deliberate APIs and restrict mutation|Make every framework member public|Public APIs require no compatibility plan
Inject services and control state transitions|Use mutable global services in all tests|Assert only private method calls
Cancel obsolete work and check request identity|Cancellation prevents every late response|Accept results in completion order
Bound concurrency and define failure policy|Create unlimited child tasks|Ignore sibling failure behavior
Resume exactly once and handle cancellation races|Resume separately on timeout and completion|Checked continuations solve ownership automatically
Define buffering and stream termination|AsyncSequence always emits one value|Never release upstream resources
Validate HTTP and transport separately|HTTP 500 is a successful domain response|Any decoded JSON is valid business data
Retry mutations under an idempotency contract|Retry every timeout with a new operation|Assume timeout means server did nothing
Use system transfer sessions and delegate handling|Keep arbitrary JS-like timers running forever|Background transfer guarantees immediate execution
Store credentials with suitable Keychain controls|Store access secrets in UserDefaults|Log secrets because storage is secure
Use supported hardware-backed key operations|Use Secure Enclave as a general SQL store|Store every arbitrary blob there
Choose storage by requirements and migration|Choose only by shortest tutorial|Ignore supported deployment versions
Use context scheduling and object IDs|Pass managed objects across arbitrary queues|Background context makes all access safe
Match delete rules to domain relationships|Cascade every relationship by default|No action means automatic orphan cleanup
Test supported old-data upgrade paths|Test only a new installation|Delete user data whenever schema changes
Separate initial setup from repeated visibility work|Appearance callbacks run only once|Observers need no teardown
Reset cells and guard represented-item identity|Apply image results to any reused cell|Use array position as permanent identity
Use stable IDs separate from content|Use random identifiers every snapshot|Duplicate identifiers repair consistency
Frame uses parent coordinates; bounds uses local coordinates|Frame and bounds always share coordinates|Transforms never affect geometry reasoning
Inspect priorities and intrinsic sizes|Fix every problem with a fixed width|Ignore Dynamic Type during testing
Parent proposes; child chooses; parent places|Frame imperatively sets every dimension|Modifier order never affects layout
Own route state and validate destinations|Persist entire mutable controllers|Trust any deep-link parameter
Bridge representable lifecycle and delegate events|Mutate from any native callback thread|Skip teardown for reusable wrappers
Own cancellables and avoid capture cycles|Subscriptions manage all owner lifetimes|Sink closures cannot retain objects
Debounce waits for quiet; throttle limits rate|Debounce immediately emits every event|Throttle waits for permanent silence
Map transforms; compactMap removes nil; flatMap flattens|Map automatically removes nil|FlatMap always sorts results
Control time and await explicit completion|Sleep a fixed number of seconds|Use real network for every unit test
Test critical journeys with stable fixtures|Snapshot alone proves checkout works|Assert incidental private view structure
Test semantics and adaptive assistive behavior|Adding labels proves full accessibility|Disable text scaling to preserve layout
Test plurals, RTL, and locale formatting|Concatenate English fragments for translation|Assume all strings fit English widths
Validate routes despite domain association|Domain association grants resource access|Every HTTPS link should execute actions
Treat push as a best-effort refresh hint|Push is a guaranteed sync log|Every notification arrives exactly once
Persist resumable work and handle expiration|BGTaskScheduler guarantees exact timing|Background tasks run indefinitely
Preserve matching symbols and build identities|Any dSYM can symbolize any build|A compile success proves release readiness
`;
quizChoices.android=`
Suspension does not imply background execution|Suspend always selects an IO thread|Async syntax removes blocking work
Cancellation is cooperative and must propagate|Catch and suppress CancellationException|CPU loops cancel without checking
Cold Flow differs from shared current state|StateFlow emits every equal update|SharedFlow is always a cold source
Remember retains composition; Saveable supports restoration|Remember survives all process termination|Saveable replaces persistent databases
Use keyed effects with lifecycle cleanup|Perform mutations during every recomposition|Effects never need cancellation
Observe local data and persist sync operations|Show only network responses|Keep offline mutations only in memory
Use stable boundaries and appropriate scopes|Make every binding a singleton|More modules always means faster builds
Restore saved state and benchmark release behavior|ViewModel survives process death by itself|Debug timing proves production startup
Model nullability and validate platform inputs|Double-bang guarantees safe null handling|Kotlin prevents all Java-related null errors
Copy is shallow for referenced fields|Data-class copy recursively clones everything|New outer instance prevents nested mutation
Structural equality differs from identity|Triple equals always compares fields|Double equals always compares addresses
Use explicit variants and exhaustive handling|Use contradictory boolean flags|Sealed classes prevent all runtime errors
Inline affects lambda behavior with size tradeoffs|Crossinline permits all nonlocal returns|Noinline removes the lambda object always
Extensions resolve from declared receiver types|Extensions override members dynamically|Extensions replace all interfaces
Job tracks completion; Deferred carries a result|Launch returns its result through await|Async has no parent failure behavior
Isolate sibling failure while handling errors|Supervision ignores every exception|Supervisor scope blocks outer cancellation
Protect compound invariants with owned locking|Atomic fields protect every multi-step update|Mutex removes the need for ownership
Choose transform, latest-switch, or combine semantics|FlatMapLatest preserves every old inner flow|Combine waits for all streams to finish
FlowOn affects the relevant upstream context|FlowOn moves every collector automatically|Collectors choose every upstream context
Share in an owned scope with start-stop policy|Sharing eliminates lifetime decisions|StateIn has no current value
Collect while active and keep effects restart-safe|Collect forever from every screen|Each restart should repeat payments
Pass IDs and load current authorized data|Pass large mutable objects as route state|Treat external route values as trusted
Hoist to the common owner with events|Put every local state in a global singleton|Every composable must own a ViewModel
Use when derived output changes less frequently|Use for every string concatenation|DerivedStateOf has no overhead
Keep stability promises accurate|Mark mutable classes Immutable for speed|Nonobservable mutation always recomposes
Use unique keys and compatible content types|Use new random keys every composition|Key every row by its current position
Read state in an appropriate rendering phase|All state reads have identical cost|Move every read into composition
Assert semantics and user-visible outcomes|Assert private composition implementation|Screenshots alone verify every interaction
Persistent deferrable constrained work|Guaranteed exact-time execution|Unlimited foreground-style execution
Choose time triggers versus deferrable work deliberately|AlarmManager bypasses all power policies|WorkManager guarantees exact alarms
Use eligible user-visible operations and restrictions|Use a service to bypass all background limits|Foreground services need no stop path
Request in context and handle denial|Request all permissions on launch|Acceptance is permanent authorization
Protect local writes and reconcile network effects|Room transactions include arbitrary servers|Network calls are automatically atomic with Room
Test old schemas and preserved data|Validate only empty new databases|Destructive recreation is always safe
Use stable paging keys and separate load errors|Offset changes cannot create duplicate items|Treat append failures as successful pages
Replace scoped dependencies with realistic fakes|Test only that injection returns an object|Share test state across every run
Measure clean and incremental build behavior|Every extra module reduces build time|Caches remove all invalidation costs
Reproduce release shrink and reflection behavior|Debug success guarantees release success|Disable all optimization instead of diagnosis
Inspect traces and main-thread contention|Coroutines automatically prevent ANRs|Every ANR is caused by network bandwidth
Fix lifecycle mismatches and inspect heaps|Application context is correct for every operation|Weak references solve every ownership leak
Save small reconstruction state, persist domain data|ViewModels persist across process death|SavedStateHandle is an unlimited database
Verify domains but still authorize resources|Verified links grant access to all records|Link parameters are trusted user identity
Respect user-controlled channels|App can force every channel to remain enabled|Delivery always means visible display
Expose useful roles, state, and focus|Describe every decorative image|Labels alone prove usable accessibility
Adapt to actual window dimensions|Use device name to force fixed portrait|Ignore resizing after initial launch
Use controlled transport and failure fixtures|Depend on public servers for every test|Mock only HTTP 200 forever
Inject schedulers and control virtual time|Sleep real time in every test|Launch test work in GlobalScope
Design encryption and key management separately|Room encrypts all databases automatically|DataStore automatically hides every secret
Settings belong in suitable settings storage|Use DataStore for every relational query|Persistence automatically establishes encryption
Test behavior changes across delivered builds|Compilation proves SDK behavior compatibility|Target SDK changes only version labels
`;
quizChoices.rn=`
Direct interop does not remove every conversion cost|JSI makes every call zero-copy|JSI makes all APIs thread-safe
Render shadow tree then commit and mount native changes|Mount executes only JavaScript logic|Render immediately updates every native view
Generate interfaces from a typed spec|Codegen validates every business permission|Codegen replaces the native implementation
Synchronous calls block their caller|Synchronous always means faster UI|JSI automatically chooses safe worker threads
Measure engine and app bottlenecks separately|Hermes removes excessive component renders|Hermes fixes every native memory leak
Inspect row identity, rendering, images, and virtualization|Memoize every component before profiling|Increase the list window without memory limits
Define ownership, threading, errors, and cleanup|Keep obsolete Activities for later calls|Generated methods remove lifecycle concerns
Audit dependencies and stage against baselines|Enable architecture flags and skip device tests|OTA can supply any missing native binary
Update state immutably at changed boundaries|Mutate nested state in place always|New variable names guarantee rerendering
Declare dependencies and clean up effects|Suppress dependency lint by default|Effects never capture earlier values
Use refs for non-rendering coordination|Ref mutation always rerenders UI|Every visible value should be a ref
Memoize where measured consumers benefit|Compare list items only by ID forever|Memoization guarantees correctness
Separate state and use appropriate subscriptions|One changing context never updates consumers|Every shared value needs its own global provider
Validate external data at runtime|TypeScript verifies every JSON payload|Casting a response proves its contract
Use correct runtime guards and discriminated variants|Interfaces validate network data at runtime|Every type assertion is a runtime check
Nullish fallback preserves zero and false|Nullish fallback rejects every falsy value|Logical OR preserves all empty values
Long JS work delays other JS tasks|Async functions parallelize CPU loops|Promises automatically move computation off-thread
Cancel supported work and guard obsolete results|Every Promise can be canceled automatically|Any late response should update current state
Share owned domain state and keep local UI local|Store every hover or input globally|All server caches are permanent local truth
Model freshness and invalidation separately|Server data never becomes stale|Optimistic changes need no reconciliation
Validate route schemas and gate protected content|Trust URLs as authorization|Persist entire native controllers in route data
Persist important state without final-callback reliance|AppState always reports OS termination|Persist only when the last callback arrives
Use appropriate native secure storage|Keep privileged server secrets in the JS bundle|AsyncStorage is always an encrypted credential vault
Persist mutations with stable operation IDs|Queue only in runtime memory|Use a new identity for every retry
Choose supported native or worklet execution paths|Animated is always JS-driven per frame|Every property supports every native path
Test gesture competition and cancellation|One drag demo proves all gestures work|Shared code removes platform differences
Bound decoded image dimensions and caches|Compressed file bytes equal decoded memory|Render every full-resolution image simultaneously
Use stable domain IDs through reordering|Array positions always preserve identity|Random keys improve retained row state
Provide accurate offsets when geometry is known|Assume variable text always has fixed height|Incorrect offsets improve scrolling anyway
Verify native accessibility on both platforms|A label alone guarantees accessible behavior|Shared JS produces identical assistive navigation
Account for insets and native resize policy|Hard-code one keyboard height|Keyboard behavior is identical in all modals
Test interactions with controlled boundaries|Only snapshot private implementation|Mocking a render proves native permissions
Exercise delivered native flows|JS mocks fully verify native linking|No device test is needed after native changes
Inspect Metro resolution and transformation|Deleting caches fixes all dependency defects|Metro replaces the native compiler
Control duplicate runtimes and workspace resolution|Monorepos cannot create duplicate React packages|Local install layout always matches CI
Check platform configuration beyond autolinking|Autolinking supplies all entitlements|Dependency discovery proves release behavior
Keep supported typed boundary contracts|Codegen makes unsupported types valid|Native contracts never need versioning
Native components expose views; modules expose services|Modules always participate in React layout|Components are only for data storage
Define listener lifecycle and missed-event reconciliation|Transient events are a durable database|Suspended JS processes every event immediately
Protect runtime lifetime and thread contract|Any thread may use any runtime freely|Host objects remain valid after runtime teardown
Validate buffer ownership and actual transfer costs|Every JSI transfer is zero-copy|Typed arrays eliminate lifetime responsibility
Inspect JS, assets, and native size separately|Dynamic import guarantees downloaded split chunks|One bundle-byte metric captures every startup cost
Preserve source maps for the exact bundle|Any map can decode every release|Native symbols replace JS source maps
Profile delivered runtime on realistic devices|Alternate debug runtimes have identical timing|One simulator trace proves every device gain
Respect installed-native compatibility|OTA adds missing native capabilities|All OTA updates bypass distribution policies
Share contracts and isolate real platform differences|Identical source guarantees identical native UX|Platform adapters should replace all shared logic
Model platform-specific outcomes and test versions|One permission enum guarantees identical OS rules|Requesting permission guarantees acceptance
Handle async and native failures separately|Error boundaries catch all native crashes|Error boundaries catch every async rejection
Measure startup phases and defer optional work|Move all initialization before first render|Hermes alone guarantees fast startup
Test clean native builds and staged baselines|Passing JS tests proves binary readiness|Any library version works with any RN version
`;
quizChoices.architecture=`
Use durable outbox and explicit conflict policy|Assume reconnect resolves every conflict|Keep all offline edits in memory
Single-flight refresh with bounded retry|Refresh independently for every failed request|Retry forever after revoked credentials
Preserve contracts for installed old clients|Backend can demand immediate app updates|All users update on deployment day
Threat-model assets and enforce server authorization|Hide privileged secrets in the binary|Device storage replaces server authorization
Set measured user-journey budgets|Use only average timings on a fast device|Optimization needs no regression owner
Correlate client and backend with safe identifiers|Log every credential for diagnosis|Crash-free sessions prove checkout success
Stage releases with compatibility-aware rollback|A flag can undo every installed binary change|Rollback needs no health thresholds
Use stable boundaries and accountable owners|Centralize every feature in one shared utility|More fragmentation always increases delivery speed
Clarify journeys and quality constraints|Choose the database before requirements|Architecture begins with a favorite framework
Choose guarantees by workflow impact|Promise strongest consistency and availability everywhere|A feed and payment need identical guarantees
Separate external, domain, and presentation needs|DTO shapes should directly govern every view|Duplicate every model without a boundary
Expose domain operations and consistency behavior|Hide all failure and sync information|Generic CRUD captures every business rule
Model valid transitions and interruption recovery|Allow every state to transition anywhere|State machines remove the need for tests
Separate reads and writes when needs justify cost|CQRS is mandatory for every app|Separate models automatically synchronize
Choose conflicts from domain rules and versions|Last-write-wins never discards useful edits|Device timestamps always give reliable ordering
Reuse a stable identity for the same operation|Generate a new key on every retry|Client keys enforce deduplication without a server
Persist cursor progress after durable application|Advance cursor before writing records|Cursors never expire or reset
Retain deletion evidence for disconnected clients|Delete all evidence immediately|Stale clients can never recreate removed data
Reconcile failures without overwriting newer edits|Rollback all current data after any failure|Optimistic UI means every mutation succeeded
Define stable ordering and cursor semantics|Offsets cannot shift under concurrent changes|Cursors guarantee every consistency property
Persist upload progress and integrity checks|Assume a foreground socket survives suspension|Restart every upload with a new operation
Validate integrity, size, and atomic storage|TLS proves every file is business-valid|Write partial artifacts as final data
Specify freshness and identity-scoped invalidation|One global TTL fits all workflows|Authorization changes never affect caches
Coalesce equivalent reads with defined cancellation|Combine distinct payments if amounts match|Coalescing removes all error handling
Bound safe retries with jitter|Retry all mutations indefinitely|Jitter guarantees exactly-once execution
Pause unsuitable calls with measured recovery|A client breaker solves every server outage|Keep retrying every millisecond
Allocate one end-to-end wait budget|Give every dependency an unlimited timeout|Retries do not add to user wait
Use push to refresh durable authorized truth|Push is the only required durable log|Notification delivery is guaranteed ordered
Choose transport by freshness and lifecycle cost|WebSockets remain always active in background|Polling is always the best realtime option
Validate destinations and authorize actions|Treat links as trusted policy|Execute any action requested by a URL
Record stable assignment and actual exposure|Assignment always means user exposure|Experiments need no guardrail metrics
Collect purposeful minimal events|Store every user payload indefinitely|More data always yields better decisions
Define user outcomes, window, and denominator|Uptime alone proves product reliability|Crash-free counts prove every journey succeeds
Use stack, build, cohort, and safe context|Group only by arbitrary message text|Log credentials to improve grouping
Own initialization budgets and regression gates|Every optional service must block launch|Warm startup proves cold startup performance
Bound resources and measure peak use|Average memory proves there are no spikes|Caches should grow without eviction
Batch nonurgent work under measured budgets|Correctness must require exact background timing|Continuous polling always reduces battery cost
Enforce dependency direction and check cycles|Shared utilities need no owners|Every module should import every other module
Provide accessible contracts and migration support|Forbid every product customization|Mandatory catalogs alone ensure adoption
Own reliability, support, and compatibility|Ownership is only the original author|Support obligations end after launch
Version SDK contracts and test consumers|Internal SDKs never need compatibility rules|Version labels excuse undocumented behavior
Evaluate maintenance and transitive risk|Popularity alone guarantees safety|Pinning removes the need for updates
Test invariants, contracts, and critical journeys|Test every implementation detail at every layer|Only end-to-end tests have value
Inject controlled interruptions and verify durability|Reconnect UI alone proves no lost operations|Stable-network tests cover offline recovery
Define supported combinations and deprecate from evidence|Require all installed clients to update immediately|Old clients disappear when main is pushed
Review requirements and risky cross-team assumptions|Judge only diagram appearance|Technology agreement proves architecture quality
Compare fit, ownership, and exit cost|Purchase price is the entire cost|Building is always better than buying
Link architecture to tested evidence and status|A diagram proves every component is implemented|Proposed extensions should be shown as delivered
Separate browsing staleness from transaction guarantees|Apply one consistency policy to every journey|Publish confidential client system details
Provide adapters, pilots, and retirement owners|Delete old services before consumer migration|Temporary dual paths need no removal plan
`;
quizChoices.cloud=`
Use six pillars to review tradeoffs and actions|A checklist proves full correctness|Cost alone determines architecture quality
Gateway handles access entry; service enforces resource rules|Gateway makes domain authorization unnecessary|Client-supplied user ID proves identity
Deduplicate stable operations atomically|Assume every event arrives exactly once|Retry with a new business identity
Choose by access patterns and consistency|Choose by database popularity|Add cache without invalidation policy
Define objectives and test bounded recovery|Multi-region is always required|Unlimited retries improve reliability
Scope cache keys and controls to authorized content|Cache every user under one shared key|Hidden object names are authorization
Use short-lived scoped access or authorized backend|Embed long-lived IAM keys in mobile code|A mobile binary can hide server privileges
Study current scope and explain scenario tradeoffs|A practice score guarantees passing|Collect badges instead of testing decisions
Responsibility depends on the chosen service|Provider owns every customer configuration|Managed services remove all application security work
Choose zone and region failure domains deliberately|Zones and Regions are the same boundary|Multi-region has no consistency cost
Configure networks separately from application access|Private addressing proves complete security|VPC replaces resource authorization
Appropriate internet routing plus addressing and controls|A subnet's name makes it public|Every resource in a public subnet is reachable
Security groups are stateful; ACLs are stateless|Security groups are subnet-wide stateless controls|Network ACLs replace service identity permissions
Compare outbound NAT with supported private endpoints|NAT is mandatory for every private service|Endpoints eliminate all routing configuration
Choose compute from runtime and ownership needs|Functions remove all business correctness work|Containers are always cheaper for every workload
Keep durable state external|Process memory is durable global state|Every request shares the same environment
Measure initialization and capacity tradeoffs|Cold starts are identical for all runtimes|Every optimization is free of cost
Scale from demand and dependency capacity|Scaling one tier never affects others|Utilization alone fits every queue workload
Health checks should reflect required readiness|Depend on every optional service in health checks|A reachable port proves all transactions succeed
Compare concrete protocol and service capabilities|Every gateway supports identical protocols|Gateway automatically knows every business permission
OAuth grants access; OIDC adds identity semantics|OAuth always supplies a universal identity token|Access and identity are identical contracts
Bind code exchange to a client verifier|PKCE hides a permanent mobile client secret|Any redirect can safely accept every code
Verify signature, issuer, audience, and time|Decoding claims is sufficient validation|Expiry alone proves authorization
Scope operation and duration and validate objects|Presigned URLs are permanent public credentials|Anyone may request any object identity
Use intentional access and lifecycle controls|Obscured bucket names are access control|Encryption removes every permission concern
Define cache identity and freshness|Personalized content can always share one cache|CDN removes all origin authorization requirements
Design schema and verify managed recovery settings|Managed database means queries need no indexes|Backups guarantee the desired restore time
Design keys from access patterns and distribution|Translate every SQL table directly|Scans always scale like keyed reads
Transactions stop at a defined boundary|A database transaction makes all remote services atomic|Retries automatically compensate side effects
Define TTL, eviction, and bounded fallback|Cache values are always durable truth|An outage should generate unlimited origin reads
Temporarily hide processing messages; still deduplicate|Visibility timeout proves exactly-once processing|Receiving automatically deletes the message
Own diagnosis and safe replay|DLQ means failures are resolved|Replay without operation identity is always safe
Apply business idempotency despite FIFO guarantees|FIFO prevents every duplicate side effect forever|Ordering alone makes consumer operations atomic
Fanout distributes; queues retain work for consumers|Every fanout endpoint stores events forever|All delivery guarantees are identical
Version semantics and test old-event consumers|Event history disappears on deploy|Adding any field is always breaking
Persist progress and reconcile partial failures|An in-memory retry loop is a durable workflow|All remote steps are one local transaction
Version config and detect drift|Templates prevent drift automatically|Put secrets directly in the repository
Use scoped access and rotation-aware consumers|Embed secrets in logs for diagnosis|Secret availability never needs failure handling
Transit and storage encryption protect different boundaries|At-rest encryption replaces authorization|TLS defines who can decrypt every database
Test restoration against objectives|Backup job success proves recovery readiness|Retention alone establishes a restore time
RTO targets time; RPO targets loss window|RPO is network throughput|RTO is the database storage size
Metrics summarize, logs record, traces connect work|Traces replace all access controls|Unlimited raw logging is always useful
Limit by identity and resource cost on server|Client UI limits enforce server security|Every user should share one unrestricted quota
Measure attributed cost per useful outcome|Infrastructure sticker price is total cost|Failed retries never affect cost
Canary limits exposure; blue-green separates environments|Traffic reversal undoes every schema migration|Neither strategy needs health criteria
Measure successful journeys and tail latency|Reachable server means successful checkout|Only average CPU is a product reliability measure
Justify regions from requirements and recovery|Multiple regions always reduce complexity|Write ownership is irrelevant across regions
Adapt client contracts without duplicating core rules|BFF should own every business rule separately|BFF removes old-client compatibility needs
Review query cost, authorization, and partial errors|GraphQL guarantees lower cost for every query|Flexible queries remove resource permissions
Build a bounded end-to-end architecture lab|Certification badges prove operational experience|Public demos should use real customer secrets
`;
quizChoices.ai=`
Define supported tasks and validate critical decisions|Fluent confidence guarantees truth|LLM output is a trusted transaction decision
Validate semantics as well as schema|Valid JSON guarantees a correct answer|Tool arguments never need authorization
Inspect ingestion, retrieval, and grounding separately|More context always repairs missing evidence|Vector search guarantees factual answers
Use narrow validated authorized tools|Model instructions replace access control|Retry consequential actions with new identities
Treat retrieved instructions as untrusted data|Every document can override application policy|Prompt wording alone ensures isolation
Evaluate representative outcomes, cost, and latency|Only attractive demo answers matter|One easy example proves production quality
Handle partial output and reconnection safely|Commit actions from unvalidated partial JSON|Reconnect should repeat every previous action
Compare capability, privacy, and resource costs|On-device models always outperform cloud|Cloud inference has no connectivity requirement
Measure actual tokens and limits|Tokens always equal characters|All languages tokenize identically
Select history without losing essential constraints|Unlimited transcripts always fit context|Summaries cannot introduce errors
Sampling changes variability, not truth guarantees|Low temperature guarantees factual correctness|Sampling produces identical results forever
Choose using representative acceptance tests|Largest model is best for every step|Price alone proves task quality
Version prompts and keep invariants in code|Prompt instructions enforce every permission|Untrusted data belongs in trusted policy
Use representative examples and held-out checks|Include all evaluation answers in prompts|More examples always improves quality
Verify claims against evidence|Plausible language proves grounding|Any citation validates every claim
Similarity vectors are not truth scores|Nearest vector guarantees a true answer|Embedding models are interchangeable without testing
Match metric and embedding configuration|Every distance metric is equivalent|Nearest content is automatically authorized
Choose chunks by boundaries and evaluation|Use one size regardless of content|Splitting never loses relevant context
Enforce trusted tenant and permission filters|Ask the model which private records to reveal|Relevant content is always authorized
Combine exact and semantic retrieval when measured|Hybrid retrieval always improves every query|Keyword search never helps identifiers
Rerank retrieved candidates with latency tradeoffs|Reranking finds evidence never retrieved|Reranking has no compute cost
Track source versions, deletion, and permissions|An index is automatically current|Old chunks need no access updates
Verify citations support the associated claim|Any related link counts as proof|Generated references always exist
Persist useful controlled task memory|Remember every customer detail forever|Memory ignores account identity and deletion
Define narrow tools and stable error contracts|Schema validity proves authorization|One generic execute-anything tool is always safest
Distinguish retryable errors and ambiguous outcomes|Treat tool exceptions as success|Expose credentials in diagnostic errors
Bound steps, time, cost, and privileges|A planner removes operational bounds|Agents should retry indefinitely
Persist validated workflow transitions|Generated summaries are transaction logs|A transcript guarantees recovery after every crash
Protocol integration still needs trust and authorization|MCP automatically makes every tool safe|MCP grants permission to every resource
Review concrete consequential actions before execution|Silence means approval|Human review replaces all validation
Contain untrusted document instructions|Retrieved text may redefine user permissions|More authoritative wording proves trust
Escape or sanitize untrusted output for its context|Model safety removes need for output validation|Every generated link is safe
Send only task-needed data under policy|Dump entire records for convenience|Provider use makes redaction unnecessary
Version representative held-out evaluation sets|Test only easy examples|Use identical answers for training and final judgment
Check known invariants deterministically|A schema check proves full truth|Models should enforce every numeric constraint alone
Calibrate judge models against human criteria|Judge numbers are objective ground truth|Models cannot share biases
Compare controlled cases and important segments|Only global averages matter|Any prompt change is an improvement
Measure pipeline and first useful output separately|Streaming removes all total latency|Model generation is the only delay
Cache by authorized identity and source version|All personalized outputs share one key|Cached content never becomes stale
Bound loops and measure cost per success|Cheapest call always means cheapest useful result|Retries do not contribute cost
Coordinate bounded retries and user feedback|Every device should retry without limits|Provider quotas are enforced by client labels
Evaluate fallback capability and guarantees|Any different endpoint is a safe fallback|Fallbacks need no independent tests
Validate input bounds and treat extracted text as data|OCR output is trusted policy|Every file type is equally supported
Support interruption and transcription recovery|Recognized speech authorizes every action|Voice features need no visible controls
Measure memory, battery, thermal, and device support|Accuracy is the only on-device constraint|Every model fits every supported phone
Version and stage model changes|Provider updates never change behavior|Rollback ignores stored schemas
Combine biased feedback with task outcomes|No complaints proves satisfaction|User ratings are an unbiased complete dataset
Trace versions and outcomes with redaction|Store all raw prompts forever|Credentials improve observability
Abstain when evidence or authority is insufficient|Invent plausible details to complete every answer|Confidence replaces missing evidence
Show quality, cost, latency, and failure evidence|A prompt demo proves production reliability|Prototype claims equal implemented guarantees
`;
quizChoices.staff=`
Record alternatives, consequences, and revisit criteria|Record only the winning technology name|An ADR proves a design is always best
Use shared goals, evidence, and decision ownership|Resolve every dispute by seniority|Keep debating preferences without an owner
Show growing autonomy and observed outcomes|Mentoring means doing all work yourself|Claim all mentee success as personal output
Contain impact and own prevention actions|Speculate publicly before verifying impact|Blameless means no improvement accountability
Offer useful defaults and migration support|Mandates alone guarantee adoption|Ignore each team's integration constraints
Quantify specific costs and bounded outcomes|Refactor all code without priorities|Technical debt automatically outranks features
Explain own decisions and honest evidence|List only technology names|Invent metrics to make the story stronger
Demonstrate coherent architecture and reproducible evidence|Add features without failure tests|Describe proposed work as already delivered
Show broader sustained outcomes in organization context|Years alone guarantee Staff scope|Titles mean identical scope in every company
Connect goals, priorities, owners, and measures|Create an unbounded technology wishlist|Strategy needs no sequencing
Clarify unknowns and run bounded discovery|Commit immediately to every irreversible decision|Wait until uncertainty completely disappears
Align user impact with engineering constraints|Architecture automatically outranks product goals|Stakeholders need only technical jargon
RFC invites review; ADR records decisions|RFC and ADR always have identical timing|Documents replace implementation evidence
Prepare decisions and record actions|Recurring meetings prove effective governance|Include everyone without an open decision
Delegate supported ownership with accountability|Delegate tasks without context|Retain every small implementation choice
Set capability, practice, feedback, and evidence|Provide only unrelated reading lists|Engineer growth needs no real opportunities
Describe observed behavior and actionable impact|Use vague labels about personality|Feedback should have no follow-up
Clarify contracts, alternatives, and dependency owners|Promise dates without external commitment|Hide blocked dependencies until launch
Compare impact, risk, capacity, and sequencing|Choose solely by newest technology|A scoring spreadsheet replaces judgment
State assumptions, ranges, and updates|Precise dates eliminate uncertainty|Never revise an initial estimate
Expose scope tradeoffs with relevant owners|Silently absorb every late requirement|Reliability is automatically expendable
Record specific risk, owner, and trigger|List generic worries without actions|Risk registers need no review
Own support, reliability, and compatibility after launch|Ownership ends at first release|Consumers should handle every defect alone
Tie actions to causes and verification|Be more careful is sufficient prevention|Assign actions without an owner
Communicate confirmed impact and next updates|Promise recovery before evidence|Publish speculative causes as facts
Explain baseline, conditions, and regression evidence|One debug-device timing proves every gain|Report only the largest number without context
Explain constraints, staging, contribution, and lessons|Take credit for all team decisions|A migration story needs no outcome
Own responsibility and changed behavior|Use a hidden success as every failure story|Blame others and avoid lessons
Represent both positions and evidence fairly|Portray disagreement as defeating colleagues|Ignore the other team's constraints
Use contextual outcomes and shared attribution|Commit counts prove influence alone|Every metric needs no baseline
Connect investment to understandable user outcomes|Promise revenue without evidence|Use only infrastructure jargon
Use balanced system-level evidence|Lines of code establish individual value|Metrics cannot affect incentives
Measure feedback delay and maintain correctness|Faster CI excuses unreliable builds|Caches eliminate all maintenance cost
Use structured relevant criteria and multiple evidence|Hire solely from confident trivia answers|Unfamiliar syntax proves weak reasoning
Record specific gaps and reassess practice|Improve everything is actionable feedback|Mock interviews need no rubric
Show honest architecture and leadership outcomes|Invent scale numbers|A technology list alone proves Staff scope
Publish only allowed sanitized evidence|Include confidential client metrics|Anonymization allows all secrets
Explain hard decisions in a few deep case studies|More product logos always prove depth|Diagrams alone replace tradeoff reasoning
Provide a specific role and concise fit evidence|A referral guarantees an interview|Demand a response from every contact
Evaluate real outcomes and decision boundaries|A prestigious title guarantees growth|Every Staff role has identical duties
Develop owners and review high-risk decisions|Approve every local choice personally|Centralization always creates leverage
Allow owned justified exceptions and review triggers|Uniformity matters regardless of user cost|Exceptions never inform standard design
Review consequential risk with useful fast paths|More approvals always improve quality|Routine changes require maximum review layers
Provide migration support and usage-based retirement|Delete supported APIs without notice|Consumers should discover breakage themselves
Provide runnable current setup and test onboarding|A stale wiki guarantees onboarding|Hidden local setup knowledge is fine
Write durable context and clear actions|A chat transcript is always a decision record|Only live meetings can resolve issues
Reject against criteria and offer alternatives|Authority alone proves a proposal is unsuitable|Never reconsider after new evidence
Practice role-linked gaps and use feedback|Tutorial completion proves independent capability|Study every tool equally forever
Choose concrete actions from work and feedback|Hours alone prove learning|Reviews should change nothing
Collect sustained cross-team outcomes under real criteria|Certificates alone prove promotion scope|Every team outcome belongs to one engineer
`;
quizChoices.dsa=`
Define input and worst-case time and space|One loop always means constant time|Expected and worst-case are identical
Expected constant operations with memory tradeoffs|Hash maps always guarantee worst-case constant time|Hash maps preserve every required ordering
Use a valid contiguous-window invariant|Negative sums never affect monotonicity|Sliding windows fit every array problem
Define bounds, predicate, and progress|Boundary convention is irrelevant|Empty input never needs testing
BFS layers find shortest unweighted edge counts|Ordinary BFS solves all weighted paths|DFS always gives shortest paths
Choose selection and interval endpoint rules|Touching endpoints always overlap in every problem|Sorting rules need no specification
Derive state, transitions, bases, and order|Memorize code without a state definition|Space optimization precedes correctness
Clarify and test a correct baseline and invariant|Code immediately without constraints|Silence is the best response when stuck
Check complement before storing the current index|Reuse the same position twice|Sort and return positions without mapping originals
Use a set or justified sorting tradeoff|Only adjacent unsorted duplicates matter|Duplicates can be detected without any comparisons
Count under an agreed character model|Compare string lengths only|Byte counts always equal user characters
Move inward using sorted-sum monotonicity|Use the same moves on any unsorted input|Sorted input needs two copies of every index
Maintain a distinct written prefix|Delete while scanning without index handling|Unsorted neighbors suffice for global deduplication
Stably compact nonzero values then fill|Reverse all nonzero values|Swap freely even if order must be preserved
Compare restarting with extending and track best|Initialize best to zero for all-negative requirements|The largest element always defines the optimal segment
Use prefix and suffix products without division|Division works identically when zero occurs|Only sum values to derive products
Write larger remaining items from the end|Write from the front over unread capacity|Input capacity never matters
Normalize by specification and compare inward|Only compare the first and last character|Case and Unicode rules never matter
Advance left past duplicates inside the window|Move left backward to every seen character|Every repeated character ends the entire scan
Track required multiplicities and shrink valid windows|Distinct membership is enough for repeated requirements|Take any substring with the same length
Negative values break simple sum monotonicity|Expanding always increases sum|Shrinking always decreases sum
Subtract prefixes after linear preprocessing|Recompute every range to get constant query time|Static prefixes automatically support all updates
Count prior prefix minus target with initial zero|Insert current prefix before every lookup|Positive-only windows handle arbitrary negatives
Match closing brackets to stack top|Match any opener anywhere in the input|An unmatched final stack is always valid
Store minima alongside stack state|Only remember the most recent pushed number|Removing a minimum never affects the minimum
Resolve indices with a monotonic stack|Rescan all later values for linear worst-case work|Equality has the same meaning in all variants
Transfer only when output stack is empty|Reverse the entire queue on every dequeue|Amortized constant means every operation is constant
Save next before relinking to previous|Overwrite next before saving traversal|Use the original head as the reversed head always
Use slow-fast pointers and justified entry recovery|Two pointers at the same speed detect every cycle|A null pointer proves a cycle
Relink smaller heads and attach the suffix|Sort node values without considering ownership|Discard the remaining list suffix
Maintain a valid gap using a dummy head|Remove by index without checking n|Both pointers should always start at the end
Choose node order and account for height space|Inorder sorts every binary tree|Recursion always uses constant space
Use maximum child depth or BFS levels|Count all nodes to obtain depth|Every tree has logarithmic height
Carry ancestor bounds or valid inorder ordering|Check only immediate children|Ignore duplicate policy and bound overflow
Inspect subtree targets under an existence contract|Node values are always unique identities|General trees support only BST-style comparisons
Preserve structure with an unambiguous format|Traversal values alone always preserve structure|Input validation is irrelevant to decoding
Choose lists for sparse edges and matrices for direct checks|Matrices always use O(V plus E) memory|Lists always give constant-time edge checks
Detect cycles and include all DAG vertices|Every directed graph has a topological order|Visit only nodes with outgoing edges
Relax nonnegative weighted paths with a priority queue|Dijkstra handles all negative weights unchanged|Ordinary BFS handles every weighted graph
Maintain components with compression and union heuristics|Union-find reconstructs every arbitrary path directly|All deletions are automatically constant-time
Traverse each unvisited land component|Count individual land cells as islands|Ignore the neighbor definition
Prune choices and restore state|Backtracking always has polynomial output|Never undo path mutation after returning
Define amount state with zero and unreachable bases|Greedy largest coin is always optimal|Unreachable states should equal zero
Compare nonadjacent recurrence with a clear empty policy|Always select every positive adjacent value|Sum only the last two positions
Maintain minimal tails with boundary-aware search|Tails are always the actual recovered subsequence|LIS always means contiguous subarray
Sort starts and merge using the defined overlap rule|Merge only equal-length intervals|Endpoint semantics never change the result
Track active ends or ordered start-end events|Count every meeting regardless of overlap|Equal start and end always require another room
Count frequencies and choose a justified selection method|Return the largest numeric values regardless of counts|Tie policy is irrelevant when the contract specifies it
Use a map and doubly linked recency list|Use only an unsorted array for expected constant access|Never move a cache hit in recency order
Respect encoding model and language indexing costs|Every character index is free random access|Bytes always equal visible characters
`;
const objectiveBank=new Map();
for(const [track,rows]of Object.entries(quizChoices)){const questions=learningBank.filter(q=>q.track===track),entries=rows.trim().split('\n');if(entries.length!==questions.length)throw Error(`Quiz count mismatch: ${track}`);entries.forEach((row,i)=>{const choices=row.split('|');if(choices.length!==3||new Set(choices).size!==3)throw Error('Invalid quiz choices');objectiveBank.set(questions[i].id,{choices,correct:0});});}
